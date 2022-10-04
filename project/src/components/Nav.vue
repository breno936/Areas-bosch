<template>
<nav class="navbar navbar-expand-custom navbar-mainbg">
        <a class="navbar-brand navbar-logo" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
				<router-link to="/">
                <li class="nav-item active">
                    <a class="nav-link" href="javascript:void(0);"><i class="fas fa-tachometer-alt"></i>Home</a>
                </li>
				</router-link>
				<router-link to="areas">
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);"><i class="far fa-address-book"></i>Áreas</a>
                </li>
				</router-link>
				<router-link to="about">
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);"><i class="far fa-clone"></i>About</a>
                </li>
				</router-link>
				<li class="nav-item">
                    <a class="nav-link" @click="carregar"><i class="far fa-calendar-alt"></i>Contact</a>
                </li>
            </ul>
        </div>
    </nav>

</template>

<script>
import $ from 'jquery'
import jQuery from 'jquery'
//  import { createApp } from 'vue'
// import App2 from '../App2.vue'
import ViewApp from '@/main'

export default {
  
  name: 'App',
  components: {
  },
  methods:{
	carregar: function(id){
		console.log(id);
		ViewApp(true);
	}
  },
  mounted(){
     // ---------Responsive-navbar-active-animation-----------
/* eslint-disable no-unused-vars */
function test(){
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top":itemPosNewAnimTop.top + "px", 
		"left":itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click","li",function(e){
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top":itemPosNewAnimTop.top + "px", 
			"left":itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function(){
	setTimeout(function(){ test(); });
});
$(window).on('resize', function(){
	setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function(){ test(); });
});



// --------------add active class-on another-page move----------
jQuery(document).ready(function($){
	// Get current path and find target link
	var path = window.location.pathname.split("/").pop();

	// Account for home page with empty path
	if ( path == '' ) {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="'+path+'"]');
	// Add active class to target link
	target.parent().addClass('active');
});




// Add active class on another page linked
// ==========================================
// $(window).on('load',function () {
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });
/* eslint-enable no-unused-vars */
  },

}
</script>

<style scoped>
@import '../assets/css/slider.css'

</style>
