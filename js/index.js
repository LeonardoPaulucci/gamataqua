let app = new Vue({
	el: '#app',
	data:{
		teste: '',
		imagens:[],
		logo:'imagem/logo.png',
		menu:[
			{nome:'home', pagina:'Pagina Inicial', classe:''},
			{nome:'sobre', pagina:'Nossa Historia', classe:''},
			{nome:'formu', pagina:'Formulario de Castração', classe:''}
    	],
		carouselimg:[
			{src:'imagem/item-1.jpg', title:'imagem 1', ativado:true},
			{src:'imagem/item-2.jpg', title:'imagem 2', ativado:false},
			{src:'imagem/item-3.jpg', title:'imagem 3', ativado:false}
		],
		pg:'home',
			pgNm: 'GAMA - Taquaritinga',
		dropdown: 'dropdown navbar-item',
		modal: 'modal',
		galInf: {},
		search: ''
	},
	mounted(){
	    let n = 0
	    let home = 0
	    for(let x of this.menu){
	      this.menu[n].classe = ''
	      if(location.href.split('#')[1] === x.nome){
	        this.menu[n].classe = 'is-active'
			this.pg = this.menu[n].nome
	      }
	      else{
	        home++
	      }
	      n++
	    }
	    if(home > 5){
	      this.menu[0].classe = 'is-active'
	    }
  	},
	methods:{
		tooglemenu: function (){
			if(this.menucell === 'menucell')
				this.menucell = 'esconde'
			else
				this.menucell = 'menucell'
		},
		clickpagina: function (nome, z=null){
			this.pg = nome
			let x = location.href.split(/#/)[0]
			location.href = x + '#' + nome
		    let n = 0
		    for(let a of this.menu){
		      this.menu[n].classe = ''
		      if(a.nome === nome){
		        this.menu[n].classe = 'is-active'
		      }
		      n++
		    }
		    window.scrollTo(0, window.innerHeight*2-270)
		    if(z !== null){
		    	this.ativadw()
		    }
		},
		abrir: function (){
			window.open('https://gamataquaritinga.wordpress.com/', '_blank').focus()
		},
		ativadw: function(){
			if(this.dropdown === 'dropdown navbar-item'){
				this.dropdown = 'dropdown navbar-item is-active'
			} else {
				this.dropdown = 'dropdown navbar-item'
			}
		},
		ler: function(e){
			if(this.filtra[e].leia.length === 250){
				this.filtra[e].leia.length = Math.pow(10, 99)
				this.filtra[e].leia.html = 'diminuir'
				this.filtra[e].leia.sufix = ''
			} else {
				this.filtra[e].leia.length = 250
				this.filtra[e].leia.sufix = '...'
				this.filtra[e].leia.html = 'Continue Lendo'

			}
		},
		abrirModal: function(e){
			if(e === '+1'){
				let x = 0
				while(this.galInf.nome !== this.galeria[x].nome){
					x++
				}
				x++
				if(this.galeria[x] !== undefined){
					this.galInf = this.galeria[x]
				} else {
					this.galInf = this.galeria[0]
				}
			} else if(e === '-1'){
				let x = this.galeria.length - 1
				while(this.galInf.nome !== this.galeria[x].nome){
					x = x - 1
				}
				if(x > 0){
					x = x - 1
				} else {
					x = this.galeria.length - 1
				}
				this.galInf = this.galeria[x]
			} else {
				this.galInf = this.galeria[e]
				if(this.modal = 'modal'){
					this.modal += ' is-active'
				}
			}
		}
	},
	computed:{
		filtra: function(){
			return this.postagem.filter((pst) =>{
				let teste1 = pst.titulo.toLowerCase().match(this.search.toLowerCase())
				let teste2 =  pst.texto.toLowerCase().match(this.search.toLowerCase())
				if(teste1 || teste2){
					return pst.titulo
				}
			})
		}
	},
	filters:{
		leiaMais: function(text, length, suffix){
			return text.substring(0, length) + suffix
		}
	}
})
window.onload = () =>{
	window.setTimeout(()=> bounty.default({ el: '.js-bounty', value: '100.000', lineHeight: 1.5, letterSpacing: 1, animationDelay: 200, letterAnimationDelay: 550 }), 0)
}
