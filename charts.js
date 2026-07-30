/* ==========================================================
   Porsche Sales Analytics
   charts.js
========================================================== */

Chart.defaults.color = "#d7d7d7";
Chart.defaults.borderColor = "rgba(255,255,255,.08)";
Chart.defaults.font.family = "Inter";

/* ==========================================================
   PALETA
========================================================== */

const COLORS = {
    red: "#D5001C",
    white: "#FFFFFF",
    gold: "#BFA46F",
    gray: "#777777",
    dark: "#1B1B1B",
    silver: "#BBBBBB"
};

/* ==========================================================
   DADOS DE EXEMPLO
========================================================== */

const vendasCidade = {
    labels: [
        "São Paulo",
        "Rio de Janeiro",
        "Curitiba",
        "Brasília",
        "Belo Horizonte",
        "Porto Alegre"
    ],
    valores: [84,62,49,38,31,27]
};

const modelos = {
    labels:[
        "911",
        "Cayenne",
        "Macan",
        "Taycan",
        "Panamera"
    ],
    valores:[
        91,
        70,
        56,
        45,
        31
    ]
};

const pagamentos = {
    labels:[
        "PIX",
        "Financiamento",
        "TED",
        "Cartão"
    ],
    valores:[
        35,
        30,
        22,
        13
    ]
};

const mensal = {
    labels:[
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez"
    ],
    valores:[
        18,
        26,
        29,
        34,
        41,
        47,
        45,
        54,
        58,
        66,
        70,
        76
    ]
};

/* ==========================================================
   VENDAS POR CIDADE
========================================================== */

new Chart(
    document.getElementById("cidadeChart"),
    {
        type:"bar",

        data:{

            labels:vendasCidade.labels,

            datasets:[{

                label:"Veículos vendidos",

                data:vendasCidade.valores,

                backgroundColor:COLORS.red,

                borderRadius:8

            }]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{
                legend:{
                    display:false
                }
            }

        }

    }
);

/* ==========================================================
   PAGAMENTOS
========================================================== */

new Chart(

    document.getElementById("pagamentoChart"),

    {

        type:"doughnut",

        data:{

            labels:pagamentos.labels,

            datasets:[{

                data:pagamentos.valores,

                backgroundColor:[

                    COLORS.red,

                    COLORS.gold,

                    COLORS.white,

                    COLORS.gray

                ],

                borderWidth:0

            }]

        },

        options:{

            maintainAspectRatio:false,

            cutout:"70%",

            plugins:{

                legend:{

                    position:"bottom"

                }

            }

        }

    }

);

/* ==========================================================
   MODELOS
========================================================== */

new Chart(

    document.getElementById("modeloChart"),

    {

        type:"bar",

        data:{

            labels:modelos.labels,

            datasets:[{

                data:modelos.valores,

                backgroundColor:[

                    COLORS.red,

                    "#555",

                    "#777",

                    COLORS.gold,

                    "#999"

                ],

                borderRadius:8

            }]

        },

        options:{

            maintainAspectRatio:false,

            plugins:{

                legend:{

                    display:false

                }

            }

        }

    }

);

/* ==========================================================
   EVOLUÇÃO MENSAL
========================================================== */

new Chart(

    document.getElementById("mensalChart"),

    {

        type:"line",

        data:{

            labels:mensal.labels,

            datasets:[{

                label:"Vendas",

                data:mensal.valores,

                borderColor:COLORS.red,

                backgroundColor:"rgba(213,0,28,.20)",

                fill:true,

                tension:.35,

                pointRadius:5,

                pointHoverRadius:7

            }]

        },

        options:{

            maintainAspectRatio:false,

            plugins:{

                legend:{

                    display:false

                }

            }

        }

    }

);

/* ==========================================================
   ATUALIZAÇÃO FUTURA
==========================================================

Na próxima etapa, estes dados serão substituídos
automaticamente pelos dados da planilha Excel.

Serão implementadas funções como:

updateCityChart(...)
updateModelChart(...)
updatePaymentChart(...)
updateMonthlyChart(...)

========================================================== */