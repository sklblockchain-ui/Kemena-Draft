Papa.parse("kemena_dataset.csv", {

download: true,
header: true,

complete: function(results) {

let d = results.data[0]

// cards

document.getElementById("winner").innerText = d.WINNER
document.getElementById("majority").innerText = d.MAJORITY
document.getElementById("turnout").innerText = d.TURNOUT + "%"
document.getElementById("urban").innerText = d.URBAN_RURAL


// vote chart

new Chart(document.getElementById("voteChart"),{

type:"bar",

data:{
labels:["GPS","PH","PSB","PBK","ASPIRASI"],
datasets:[{
label:"Votes",
data:[
d.GPS_VOTE,
d.PH_VOTE,
d.PSB_VOTE,
d.PBK_VOTE,
d.ASPIRASI_VOTE
]
}]
}

})


// ethnic chart

new Chart(document.getElementById("ethnicChart"),{

type:"pie",

data:{
labels:["Malay/Melanau","Chinese","Iban","Bidayuh","Orang Ulu","Others"],
datasets:[{
data:[
d.MALAY_MELANAU,
d.CHINESE,
d.IBAN,
d.BIDAYUH,
d.ORANG_ULU,
d.OTHERS
]
}]
}

})


// age chart

new Chart(document.getElementById("ageChart"),{

type:"bar",

data:{
labels:["21-29","30-39","40-49","50-59","60-69","70-79","80-89","90+"],
datasets:[{
label:"%",
data:[
d.AGE_21_29,
d.AGE_30_39,
d.AGE_40_49,
d.AGE_50_59,
d.AGE_60_69,
d.AGE_70_79,
d.AGE_80_89,
d.AGE_90_PLUS
]
}]
}

})


// gender chart

new Chart(document.getElementById("genderChart"),{

type:"doughnut",

data:{
labels:["Male","Female"],
datasets:[{
data:[d.MALE,d.FEMALE]
}]
}

})

}

})
