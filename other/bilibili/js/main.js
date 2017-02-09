require.config({
	paths:{
		"jquery":["http://cdn.bootcss.com/jquery/1.11.1/jquery.min","jquery.min"],
		"bootstrap":["https://cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min","bootstrap.min"],
		"lazyload":["http://cdn.bootcss.com/jquery_lazyload/1.9.3/jquery.lazyload.min","jquery.lazyload"],
		"slick":["http://cdn.bootcss.com/slick-carousel/1.6.0/slick.min","slick.min"],
		"common":"common"
	},
	shim:{
		'bootstrap':{
			'deps':['jquery']
		},
		'lazyload':{
			'deps':['jquery']
		}
	
	}
})

require(['jquery','bootstrap','lazyload','slick','common'])
