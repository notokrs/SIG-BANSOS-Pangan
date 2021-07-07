//tabular.html
$(document).ready(function () {
	//tabel penerima
	$("#tabel-sumber-data").DataTable({
		pageLength: 25,
		rowReorder: {
			selector: "td:nth-child(2)",
		},
		responsive: true,
	});

	//tabel e-warong
	$("#tabel-ewarong").DataTable({
		rowReorder: {
			selector: "td:nth-child(2)",
		},
		responsive: true,
	});

	changeMantain();
});

//chart penerima
Chart.defaults.font.family = "'Prompt', sans-serif";

let penerima = document.getElementById("penerima").getContext("2d");
let penerimaChart = new Chart(penerima, {
	type: "bar",
	data: {
		datasets: [
			{
				label: "Jumlah Penerima",
				data: {
					Salem: 5178,
					"Bantar Kawung": 11760,
					Bumiayu: 8045,
					Paguyangan: 11468,
					Sirampog: 6661,
					Tonjong: 7556,
					Larangan: 13258,
					Ketanggungan: 15183,
					Losari: 12791,
					Tanjung: 10526,
					Kersana: 5146,
					Bulakamba: 16502,
					Wanasari: 14986,
					Jatibarang: 6010,
					Songgom: 6785,
					Brebes: 10815,
					Banjarharjo: 10880,
				},
				backgroundColor: "#e63946",
				normalized: true,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		plugins: {
			title: {
				display: true,
				text: "Jumlah Penerima Bantuan Sosial Pangan",
				font: {
					size: 16,
				},
			},
		},
	},
});

//chart anggaran
let anggaran = document.getElementById("anggaran").getContext("2d");
let anggaranChart = new Chart(anggaran, {
	type: "bar",
	data: {
		datasets: [
			{
				label: "Jumlah Anggaran",
				data: {
					Salem: 628980000,
					"Bantar Kawung": 1293600000,
					Bumiayu: 884950000,
					Paguyangan: 1261480000,
					Sirampog: 732710000,
					Tonjong: 831160000,
					Larangan: 1458380000,
					Ketanggungan: 1670130000,
					Losari: 1407010000,
					Tanjung: 1157860000,
					Kersana: 566060000,
					Bulakamba: 1815200000,
					Wanasari: 1648460000,
					Jatibarang: 661100000,
					Songgom: 746350000,
					Brebes: 1189650000,
					Banjarharjo: 1196800000,
				},
				backgroundColor: "#457b9d",
				normalized: true,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		plugins: {
			title: {
				display: true,
				text: "Jumlah Anggaran Bantuan Sosial Pangan",
				font: {
					size: 16,
				},
			},
		},
	},
});

//chart e-warong
let eWarong = document.getElementById("ewarong").getContext("2d");
let eWarongChart = new Chart(eWarong, {
	type: "bar",
	data: {
		datasets: [
			{
				label: "Jumlah E-Warong",
				data: {
					Salem: 0,
					"Bantar Kawung": 0,
					Bumiayu: 0,
					Paguyangan: 0,
					Sirampog: 0,
					Tonjong: 0,
					Larangan: 1,
					Ketanggungan: 0,
					Losari: 1,
					Tanjung: 0,
					Kersana: 0,
					Bulakamba: 2,
					Wanasari: 1,
					Jatibarang: 0,
					Songgom: 0,
					Brebes: 1,
					Banjarharjo: 0,
				},
				backgroundColor: "#ffb703",
				normalized: true,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			y: {
				beginAtZero: true,
			},
		},
		plugins: {
			title: {
				display: true,
				text: "Jumlah E - Warong setiap Kecamatan",
				font: {
					size: 16,
				},
			},
		},
	},
});

//chart ewarong pie
let eWarongPie = document.getElementById("ewarong-pie").getContext("2d");
let eWarongPieChart = new Chart(eWarongPie, {
	type: "pie",
	data: {
		labels: ["Larangan", "Losari", "Bulakamba", "Brebes"],
		datasets: [
			{
				label: "Jumlah E-Warong",
				data: [1, 1, 2, 1],
				hoverOffset: 4,
				backgroundColor: ["#9b5de5", "#f15bb5", "#fee440", "#00f5d4"],
				normalized: true,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top",
			},
			title: {
				display: true,
				text: "Jumlah E - Warong Terbanyak",
				font: {
					size: 16,
				},
			},
		},
	},
});

// bar chart maintainAspectRatio
function changeMantain() {
	if ($(window).width() > 500) {
		for (let id in Chart.instances) {
			Chart.instances[id].canvas.parentNode.style.height = "350px";
			Chart.instances[id].update("reset");
			Chart.instances[id].update();
		}
	} else {
		for (let id in Chart.instances) {
			Chart.instances[id].canvas.parentNode.style.height = "250px";
			Chart.instances[id].update("reset");
			Chart.instances[id].update();
		}
	}
}

$(window).resize(function () {
	changeMantain();
});
