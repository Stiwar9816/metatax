<template>
    <div class="mt-4 pb-1.5 panel">
        <div class="mb-4.5 flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <!-- Buttons Actions -->
            <div class="flex flex-wrap items-center">
                <button type="button" class="btn btn-primary btn-sm m-1" @click="exportTable('csv')">
                    <IconsIconFileEarmarkExcelFill class="w-5 h-5 mr-1" />
                    CSV
                </button>
                <button type="button" class="btn btn-primary btn-sm m-1" @click="exportTable('txt')">
                    <IconsIconFileEarmarkTextFill2 class="w-5 h-5 mr-1" />
                    TXT
                </button>
                <client-only>
                    <vue3-json-excel
                        class="btn btn-primary btn-sm m-1 cursor-pointer uppercase"
                        :name="`${props.filenameExport}.xls`"
                        :fields="props.excelFields"
                        :json-data="props.items"
                        :worksheet="`${props.filenameExport}`"
                    >
                        <IconsIconFileEarmarkExcelFill class="w-5 h-5 mr-1" />
                        excel
                    </vue3-json-excel>
                </client-only>

                <button type="button" class="btn btn-primary btn-sm m-1" @click="exportTable('print')">
                    <IconsIconPrintFill class="w-5 h-5 mr-1" />
                    IMPRIMIR
                </button>
            </div>
            <!-- Buttons Actions -->
            <div class="flex items-center gap-8 md:gap-4 ltr:ml-auto rtl:mr-auto">
                <ButtonsButtonColumnsTable :fields="props.fields" label="Columnas" />
                <div>
                    <input v-model="search" type="text" class="form-input" placeholder="Buscar..." />
                </div>
            </div>
        </div>

        <div class="datatable">
            <vue3-datatable
                :rows="props.items"
                :columns="props.fields"
                :totalRows="props.items?.length"
                :sortable="props.sortable"
                :search="search"
                skin="whitespace-nowrap bh-table-hover"
                paginationInfo="Mostrando {0} a {1} de {2} registros"
                noDataContent="No hay datos"
                :firstArrow="firtsArrow"
                :lastArrow="lastArrow"
                :previousArrow="previousArrow"
                :nextArrow="nextArrow"
            >
                <!-- Formatted Currency -->
                <template v-for="role in ['issued', 'received', 'total']" :key="role" v-slot:[role]="data">
                    <span>{{ currencyFormatter('MXN', data.value[role]) }} MXN</span>
                </template>
                <!-- Formatted Currency -->
            </vue3-datatable>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Vue3Datatable from '@bhplugin/vue3-datatable';
    import { currencyFormatter } from '../../utils/currencyFormatter';
    // Const
    const search = ref<string>('');
    const firtsArrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180">
                            <path d="M13 19L7 12L13 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`;
    const lastArrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180">
                            <path d="M11 19L17 12L11 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path opacity="0.5" d="M6.99976 19L12.9998 12L6.99976 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`;
    const previousArrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180">
                            <path d="M15 5L9 12L15 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>`;
    const nextArrow = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4.5 h-4.5 rtl:rotate-180">
                            <path d="M9 5L15 12L9 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                       </svg>`;
    // Props
    const props = defineProps({
        items: Object,
        fields: Object,
        sortable: {
            type: Boolean,
            default: true,
        },
        excelFields: Object,
        excelItems: Object,
        filenameExport: String,
    });

    const exportTable = (type: string) => {
        let columns: any = props.fields!.map((d: any) => {
            return d.field;
        });

        let records = props.items!;
        let filename = props.filenameExport;

        let newVariable: any;
        newVariable = window.navigator;

        if (type == 'csv') {
            let coldelimiter = ';';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            records.map((item: any) => {
                columns.map((d: any, index: number) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/csv/i) && !newVariable.msSaveOrOpenBlob) {
                var data = 'data:application/csv;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.csv');
                link.click();
            } else {
                var blob = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob, filename + '.csv');
                }
            }
        } else if (type == 'print') {
            var rowhtml = '<p>' + filename + '</p>';
            rowhtml +=
                '<table style="width: 100%; " cellpadding="0" cellcpacing="0"><thead><tr style="color: #515365; background: #eff5ff; -webkit-print-color-adjust: exact; print-color-adjust: exact; "> ';
            columns.map((d: any) => {
                rowhtml += '<th>' + capitalize(d) + '</th>';
            });
            rowhtml += '</tr></thead>';
            rowhtml += '<tbody>';

            records.map((item: any) => {
                rowhtml += '<tr>';
                columns.map((d: any) => {
                    let val = item[d] ? item[d] : '';
                    rowhtml += '<td>' + val + '</td>';
                });
                rowhtml += '</tr>';
            });
            rowhtml +=
                '<style>body {font-family:Arial; color:#495057;}p{text-align:center;font-size:18px;font-weight:bold;margin:15px;}table{ border-collapse: collapse; border-spacing: 0; }th,td{font-size:12px;text-align:left;padding: 4px;}th{padding:8px 4px;}tr:nth-child(2n-1){background:#f7f7f7; }</style>';
            rowhtml += '</tbody></table>';
            var winPrint: any = window.open('', '', 'left=0,top=0,width=1000,height=600,toolbar=0,scrollbars=0,status=0');
            winPrint.document.write('<title>Print</title>' + rowhtml);
            winPrint.document.close();
            winPrint.focus();
            winPrint.print();
        } else if (type == 'txt') {
            let coldelimiter = ',';
            let linedelimiter = '\n';
            let result = columns
                .map((d: any) => {
                    return capitalize(d);
                })
                .join(coldelimiter);
            result += linedelimiter;
            records.map((item: any) => {
                columns.map((d: any, index: number) => {
                    if (index > 0) {
                        result += coldelimiter;
                    }
                    let val = item[d] ? item[d] : '';
                    result += val;
                });
                result += linedelimiter;
            });

            if (result == null) return;
            if (!result.match(/^data:text\/txt/i) && !newVariable.msSaveOrOpenBlob) {
                var data = 'data:application/txt;charset=utf-8,' + encodeURIComponent(result);
                var link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename + '.txt');
                link.click();
            } else {
                var blob = new Blob([result]);
                if (newVariable.msSaveOrOpenBlob) {
                    newVariable.msSaveBlob(blob, filename + '.txt');
                }
            }
        }
    };

    const capitalize = (text: string) => {
        return text
            .replace('_', ' ')
            .replace('-', ' ')
            .toLowerCase()
            .split(' ')
            .map((s: string) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    };
</script>
