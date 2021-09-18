const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


$('.app').onmousedown = function () {
	contten_setting.classList.remove("active")
	logout.classList.remove("active")
}

const img_animate_first = $$('.container_profile--layout__sum--foot_img-item')[0]
const img_animate_second = $$('.container_profile--layout__sum--foot_img-item')[1]
const img_animate_third = $$('.container_profile--layout__sum--foot_img-item')[2]
setTimeout(() => {
	setTimeout(() => {
		img_animate_first.classList.remove('second')
		img_animate_second.classList.remove('third')
		img_animate_third.classList.remove('first')

		img_animate_first.classList.add('first')
		img_animate_second.classList.add('second')
		img_animate_third.classList.add('third')
	}, 1000)
	setTimeout(() => {
		img_animate_first.classList.remove('first')
		img_animate_second.classList.remove('second')
		img_animate_third.classList.remove('third')

		img_animate_first.classList.add('third')
		img_animate_second.classList.add('first')
		img_animate_third.classList.add('second')
	}, 3000)
	setTimeout(() => {
		img_animate_first.classList.remove('third')
		img_animate_second.classList.remove('first')
		img_animate_third.classList.remove('second')

		img_animate_first.classList.add('second')
		img_animate_second.classList.add('third')
		img_animate_third.classList.add('first')
	}, 5000)
}, 0)

setInterval(() => {
	setTimeout(() => {
		img_animate_first.classList.remove('second')
		img_animate_second.classList.remove('third')
		img_animate_third.classList.remove('first')

		img_animate_first.classList.add('first')
		img_animate_second.classList.add('second')
		img_animate_third.classList.add('third')
	}, 1000)
	setTimeout(() => {
		img_animate_first.classList.remove('first')
		img_animate_second.classList.remove('second')
		img_animate_third.classList.remove('third')

		img_animate_first.classList.add('third')
		img_animate_second.classList.add('first')
		img_animate_third.classList.add('second')
	}, 3000)
	setTimeout(() => {
		img_animate_first.classList.remove('third')
		img_animate_second.classList.remove('first')
		img_animate_third.classList.remove('second')

		img_animate_first.classList.add('second')
		img_animate_second.classList.add('third')
		img_animate_third.classList.add('first')
	}, 5000)
}, 6000)

// -- xử lý zom ảnh
const zom_slide_img = $$('.container_profile--layout__playlist--item_hear--img')
zom_slide_img.forEach((zom_img, index) => {
	zom_img.onmouseover = function () {
		zom_img.classList.add('active')
	}
	zom_img.onmouseout = function () {
		zom_img.classList.remove('active')
	}
})


// Profile : xử lý khi di chuột thì hiện thanh croll
const profile_lits = $('.container_profile--layout__sum--foot_list')

profile_lits.onmouseover = (() => {
	profile_lits.classList.add('active')
})
profile_lits.onmouseout = (() => {
	profile_lits.classList.remove('active')
})


// Xử lý animation slider
const item_animate_first = $$('.col .container_body--layout_slide_img img')[0]
const item_animate_second = $$('.col .container_body--layout_slide_img img')[1]
const item_animate_third = $$('.col .container_body--layout_slide_img img')[2]
const item_animate_forth = $$('.col .container_body--layout_slide_img img')[3]
const item_animate_five = $$('.col .container_body--layout_slide_img img')[4]
item_animate_forth.style.display = 'none'
item_animate_five.style.display = 'none'
item_animate_forth.style.transform = 'translateX(-275%)'
item_animate_five.style.transform = 'translateX(-275%)'

setTimeout(() => {
	setTimeout(() => {
		item_animate_first.style.transform = 'translateX(55%)'
		item_animate_first.style.display = 'none'
		item_animate_second.style.transform = 'translateX(-110%)'
		item_animate_third.style.transform = 'translateX(-110%)'
		item_animate_forth.style.transform = 'translateX(-165%)'
		item_animate_five.style.transform = 'translateX(-220%)'
		setTimeout(function () {
			item_animate_five.style.display = 'block'
		}, 10)
	}, 3000)
	setTimeout(() => {
		item_animate_first.style.transform = 'translateX(165%)'
		item_animate_second.style.transform = 'translateX(-55%)'
		item_animate_second.style.display = 'none'
		item_animate_third.style.transform = 'translateX(-220%)'
		item_animate_forth.style.transform = 'translateX(-110%)'
		setTimeout(function () {
			item_animate_forth.style.display = 'block'
		}, 10)
		item_animate_five.style.transform = 'translateX(-330%)'
	}, 6000)
	setTimeout(() => {
		item_animate_first.style.transform = 'translateX(220%)'
		setTimeout(function () {
			item_animate_first.style.display = 'block'
		}, 10)
		item_animate_second.style.transform = 'translateX(55%)'
		item_animate_third.style.transform = 'translateX(-165%)'
		item_animate_third.style.display = 'none';
		item_animate_forth.style.transform = 'translateX(-220%)'
		item_animate_five.style.transform = 'translateX(-440%)'
	}, 9000)
	setTimeout(() => {
		item_animate_first.style.transform = 'translateX(110%)'
		item_animate_second.style.transform = 'translateX(110%)'
		setTimeout(function () {
			item_animate_second.style.display = 'block'
		}, 10)
		item_animate_third.style.transform = 'translateX(-55%)'
		item_animate_forth.style.transform = 'translateX(-330%)'
		item_animate_five.style.display = 'none'
		item_animate_five.style.transform = 'translateX(-385%)'
	}, 12000)
	setTimeout(() => {
		item_animate_first.style.transform = 'translateX(0)'
		item_animate_second.style.transform = 'translateX(0)'
		item_animate_third.style.transform = 'translateX(0)'
		setTimeout(function () {
			item_animate_third.style.display = 'block'
		}, 10)
		item_animate_forth.style.display = 'none'
		item_animate_forth.style.transform = 'translateX(-275%)'
		item_animate_five.style.transform = 'translateX(-275%)'
	}, 15000)
}, 0)

setInterval(() => {
	setTimeout(() => {
		item_animate_first.style.transform = 'translateX(55%)'
		item_animate_first.style.display = 'none'
		item_animate_second.style.transform = 'translateX(-110%)'
		item_animate_third.style.transform = 'translateX(-110%)'
		item_animate_forth.style.transform = 'translateX(-165%)'
		item_animate_five.style.transform = 'translateX(-220%)'
		setTimeout(function () {
			item_animate_five.style.display = 'block'
		}, 10)
	}, 3000)
	setTimeout(() => {
		item_animate_first.style.transform = 'translateX(165%)'
		item_animate_second.style.transform = 'translateX(-55%)'
		item_animate_second.style.display = 'none'
		item_animate_third.style.transform = 'translateX(-220%)'
		item_animate_forth.style.transform = 'translateX(-110%)'
		setTimeout(function () {
			item_animate_forth.style.display = 'block'
		}, 10)
		item_animate_five.style.transform = 'translateX(-330%)'
	}, 6000)
	setTimeout(() => {
		item_animate_first.style.transform = 'translateX(220%)'
		setTimeout(function () {
			item_animate_first.style.display = 'block'
		}, 10)
		item_animate_second.style.transform = 'translateX(55%)'
		item_animate_third.style.transform = 'translateX(-165%)'
		item_animate_third.style.display = 'none'
		item_animate_forth.style.transform = 'translateX(-220%)'
		item_animate_five.style.transform = 'translateX(-440%)'
	}, 9000)
	setTimeout(() => {
		item_animate_first.style.transform = 'translateX(110%)'
		item_animate_second.style.transform = 'translateX(110%)'
		setTimeout(function () {
			item_animate_second.style.display = 'block'
		}, 10)
		item_animate_third.style.transform = 'translateX(-55%)'
		item_animate_forth.style.transform = 'translateX(-330%)'
		item_animate_five.style.display = 'none'
		item_animate_five.style.transform = 'translateX(-385%)'
	}, 12000)
	setTimeout(() => {
		item_animate_first.style.transform = 'translateX(0)'
		item_animate_second.style.transform = 'translateX(0)'
		item_animate_third.style.transform = 'translateX(0)'
		setTimeout(function () {
			item_animate_third.style.display = 'block'
		}, 10)
		item_animate_forth.style.display = 'none'
		item_animate_forth.style.transform = 'translateX(-275%)'
		item_animate_five.style.transform = 'translateX(-275%)'
	}, 15000)
}, 15000)


// xử lý zom ảnh hiển icon của slider 
const zom_img_slider = $$('.container_body--layout_list--item_img')

zom_img_slider.forEach((zom_img, index) => {
	zom_img.onmouseover = function () {
		zom_img.classList.add('active')
	}
	zom_img.onmouseout = function () {
		zom_img.classList.remove('active')
	}
})
const nav_btn_pre = $$('.container_header--content_btn')[0]
const nav_btn_next = $$('.container_header--content_btn')[1]
const sidebar_link = $$('.nav_label--sidebar_link')

sidebar_link.forEach((link, index) => {
	sidebar_link[index].onclick = function () {
		if (index < 9) {
			$('.nav_label--sidebar_link.active').classList.remove('active')
			sidebar_link[index].classList.add('active')


			const mobile_link = $('.listen_mobile--link_tag.active')
			if (mobile_link) {
				mobile_link.classList.remove('active')
			}
		}
		if (index == 0) {
			$('.container_body').style.display = 'none'
			$('.container_profile').style.display = 'none'
			setTimeout(function () {
				$('.container_profile').style.display = 'block'
			}, 100)
			nav_btn_pre.classList.remove('active')
			nav_btn_next.classList.add('active')

			$$('.listen_mobile--link_tag')[0].classList.add('active')
		}
		if (index == 1) {
			$('.container_profile').style.display = 'none'
			setTimeout(function () {
				$('.container_body').style.display = 'block'
			}, 100)
			nav_btn_pre.classList.add('active')
			nav_btn_next.classList.remove('active')

			$$('.listen_mobile--link_tag')[1].classList.add('active')
		}

	}
})
const avata = $$('.container_header--content_extend--item')[3]
avata.onclick = function () {
	$('.container_body').style.display = 'none'
	$('.container_profile').style.display = 'none'
	setTimeout(function () {
		$('.container_profile').style.display = 'block'
	}, 100)
}

// Xử lý nút next , back trên pc 
const btn_next_pre_next = $$('.container_header--content_btn')
btn_next_pre_next.forEach(function (btn, index) {
	btn.onclick = function () {
		$('.nav_label--sidebar_link.active').classList.remove('active')
		if (index == 0) {
			$$('.nav_label--sidebar_link')[0].classList.add('active')
			$('.container_body').style.display = 'none'
			$('.container_profile').style.display = 'none'
			setTimeout(function () {
				$('.container_profile').style.display = 'block'
			}, 100)
			nav_btn_pre.classList.remove('active')
			nav_btn_next.classList.add('active')
		}
		if (index == 1) {
			$$('.nav_label--sidebar_link')[1].classList.add('active')
			$('.container_profile').style.display = 'none'
			setTimeout(function () {
				$('.container_body').style.display = 'block'
			}, 100)
			nav_btn_pre.classList.add('active')
			nav_btn_next.classList.remove('active')
		}
	}
})




// Xử lý click tùy chọn các danh mục thiện

const profile_head_list = $$('.container_profile--head_list--item')
const profile_playlists = $$('.container_profile--layout__playlist')
profile_head_list.forEach((profile_head_list, index) => {
	profile_head_list.onclick = function () {
		$('.container_profile--head_list--item.active').classList.remove('active')
		this.classList.add('active')
		switch (index) {
			case 0:

				$('.container_profile').style.display = 'none'
				setTimeout(function () {
					$('.container_profile').style.display = 'block'
				}, 100)
				//chỉnh sửa bài Hát
				$('.container_profile--layout__sum--foot_list').style.width = '700px'
				$('.container_profile--layout__sum--foot_list').style.height = '224px'
				$('.container_profile--layout__sum--foot_list').style.marginBottom = '0'
				$('.container_profile--layout__sum--foot_list').style.marginLeft = '20px'
				$('.container_profile--layout__sum--foot').style.height = '244px';
				// chỉnh lại playlis
				profile_playlists[0].style.marginTop = '50px'

				// chỉnh lại ablum
				profile_playlists[1].style.marginTop = '50px'
				$('.container_profile--layout').style.height = 'auto'

				$('.container_profile--layout_art_one').style.display = 'none'
				$('.container_profile--layout_art_tow').style.display = 'none'
				$('.container_profile--layout_art_there').style.display = 'none'
				break
			case 1:
				setTimeout(function () {
					// Xử lý lick vào Dang mục bài hát thì chiều dài của thẻ max
					$('.container_profile--layout__sum--foot_list').classList.add('active_responsip')

					$('.container_profile--layout__sum').style.display = 'block'
					$('.container_profile--layout__sum--foot_img').style.display = 'none'
					$('.container_profile--layout__sum--foot_list').style.width = '100%'
					$('.container_profile--layout__sum--foot_list').style.height = '100%'
					$('.container_profile--layout__sum--foot_list').style.marginBottom = '25px'
					$('.container_profile--layout__sum--foot').style.height = '100%'
					$('.container_profile--layout__sum--foot_list').style.margin = '0'
					profile_playlists[0].style.display = 'none'
					profile_playlists[1].style.display = 'none'
					$('.container_profile--layout_art_one').style.display = 'none'
					$('.container_profile--layout_art_tow').style.display = 'none'
					$('.container_profile--layout_art_there').style.display = 'none'
				}, 400)
				break
			case 2:
				setTimeout(function () {
					$('.container_profile--layout__sum').style.display = 'none'
					profile_playlists[0].style.display = 'block'
					profile_playlists[1].style.display = 'none'
					$('.container_profile--layout').style.height = '380px'
					profile_playlists[0].style.margin = '0'
					$('.container_profile--layout_art_one').style.display = 'none'
					$('.container_profile--layout_art_tow').style.display = 'none'
					$('.container_profile--layout_art_there').style.display = 'none'
				}, 400)
				break
			case 3:
				setTimeout(function () {
					$('.container_profile--layout__sum').style.display = 'none'
					profile_playlists[0].style.display = 'none'
					profile_playlists[1].style.display = 'none'
					$('.container_profile--layout_art_one').style.display = 'flex'
					$('.container_profile--layout_art_tow').style.display = 'none'
					$('.container_profile--layout_art_there').style.display = 'none'
					$('.container_profile--layout').style.height = '305px'
				}, 400)
				break;
			case 4:
				setTimeout(function () {
					$('.container_profile--layout__sum').style.display = 'none'
					profile_playlists[0].style.display = 'none'
					profile_playlists[1].style.display = 'block'
					profile_playlists[1].style.margin = '0'
					$('.container_profile--layout').style.height = '625px'
					$('.container_profile--layout_art_one').style.display = 'none'
					$('.container_profile--layout_art_tow').style.display = 'none'
					$('.container_profile--layout_art_there').style.display = 'none'
				}, 400)
				break;
			case 5:
				setTimeout(function () {
					$('.container_profile--layout__sum').style.display = 'none'
					profile_playlists[0].style.display = 'none'
					profile_playlists[1].style.display = 'none'
					$('.container_profile--layout_art_tow').style.display = 'flex'
					$('.container_profile--layout_art_one').style.display = 'none'
					$('.container_profile--layout_art_there').style.display = 'none'
					$('.container_profile--layout').style.height = '305px'
				}, 400)
				break
			case 6:
				setTimeout(function () {
					$('.container_profile--layout__sum').style.display = 'none'
					profile_playlists[0].style.display = 'none'
					profile_playlists[1].style.display = 'none'
					$('.container_profile--layout_art_there').style.display = 'flex'
					$('.container_profile--layout_art_one').style.display = 'none'
					$('.container_profile--layout_art_tow').style.display = 'none'
					$('.container_profile--layout').style.height = '305px'
				}, 400)
				break
		}
	}
})



const btn_net_slider = $$('.container_body--layout_list .fas')
btn_net_slider.forEach(function (btn, index) {
	btn.onclick = function () {
		const click_parent = btn.parentNode.parentNode.parentNode;
		const time_first = click_parent.querySelector('.container_body--layout_list--items.time_first')
		const time_first_second = click_parent.querySelector('.container_body--layout_list--items.time_first.time_second')
		const btn_first = click_parent.querySelectorAll('.fas')[0]
		const btn_second = click_parent.querySelectorAll('.fas')[1]
		const layout_list__items = click_parent.querySelector('.container_body--layout_list--items')
		const layout_list__item_half = click_parent.querySelector('.container_body--layout_list--items.slider_half'); // kéo sáng phải và trái 1 lần

		if (index % 2 == 0) {
			if (layout_list__item_half) {
				layout_list__item_half.classList.remove('time_first')
				btn_first.classList.remove('active')
				btn_second.classList.add('active')
			} else {
				if (time_first_second) {
					layout_list__items.classList.remove('time_second')
					btn_second.classList.add('active')
				} else {
					layout_list__items.classList.remove('time_first')
					btn_first.classList.remove('active')
				}
			}

		}
		else {
			if (layout_list__item_half) {
				layout_list__item_half.classList.add('time_first')
				btn_first.classList.add('active')
				btn_second.classList.remove('active')
			} else {
				if (time_first) {
					layout_list__items.classList.add('time_second')
					btn_second.classList.remove('active')
				}
				else {
					layout_list__items.classList.add('time_first')
					btn_first.classList.add('active')
				}
			}
		}
	}
})

const btn_icon_radio = $$('.slider_radio .fas')
btn_icon_radio.forEach(function (btn, index) {
	btn.onclick = function () {
		const click_parent = btn.parentNode;
		const btn_first = click_parent.querySelectorAll('.fas')[0]
		const btn_second = click_parent.querySelectorAll('.fas')[1]

		const time_first_half = click_parent.querySelector('.container_body--layout_list--items.slider_half')

		if (index % 2 == 0) {
			if (time_first_half) {
				time_first_half.classList.remove('time_first')
				btn_first.classList.remove('active')
				btn_second.classList.add('active')
			}
		}
		else {
			if (time_first_half) {
				time_first_half.classList.add('time_first')
				btn_first.classList.add('active')
				btn_second.classList.remove('active')
			}
		}
	}
})
// Xử lý phần otion --> đăng xuất trang 
const logout = $('.container_profile--user_action--icon');
logout.onclick = function () {
	logout.classList.add('active');
}
// xử lý phần setting 

const contten_setting = $(".container_header--content_extend--setting");

const icon_setting = $('.container_header--content_extend--item .fa-cog');
const setting = icon_setting.parentNode;
setting.onclick = function () {
	contten_setting.classList.add("active");
}
const heart_pc = $('.meadia_icon_more.heart');
heart_pc.onclick = function () {
	heart_pc.classList.toggle('active');
}



// Xử lý click thả tim trên mobile 
const heart_mobile = $$('.listen_mobile--player_left--icon')[0];
heart_mobile.onclick = function () {
	heart_mobile.classList.toggle('active');
}


// xử lý phần mobile và mobile khi click vào nút menu 
const menu = $(".container_header--content_menu");
menu.onclick = function () {
	menu.classList.toggle('active');
	$('.nav').classList.toggle('active_modile');
}






// Các bước làm tạo nhạc

/*    1. Render songs 
	  2.. Scroll top 
	  3. Play / Pause / Seek
	  4. CD rotate and
	  5. Next / Prev 
	  6. Random
	  7. Nexr / Prev 
	  8. Active song
	  9. Scroll Active song into view
	  10.Play song when click     
	*/
const playlist = $('.container_profile--layout__sum--foot_list');
const players = $$('.controls_player--icon')[2];
const name_music = $('.media_title--name');
const media_author = $('.media_title--author');
const media_cd = $('.media_cd');
const audio = $('#audio');
const time_range = $('.controls_time--range');
const volume_change = $('#controls_lever_range');
const nextBtn = $(".fas.fa-step-forward");
const prevBtn = $('.fas.fa-step-backward');
const randomBtn = $('.fas.fa-random');
const repeatBtn = $('.fas.fa-redo');


const players_mobile = $$('.listen_mobile--player_left--icon')[1];
const nextBtn_mobile = $$('.listen_mobile--player_left--icon')[2];
const Music = {
	currentIndex: 0,
	isplaying: false,
	isRandom: false,
	isRepeat: false,
	a: 1,
	songs: [
		{
			name: 'Anh Thề Đấy',
			singer_first: 'Thanh Hưng',
			singer_second: '',
			singer_third: '',
			path: './assets/musics/song1.mp3',
			image: './assets/img/anhtheday.jpg',
			time: '04.04'
		},
		{
			name: 'Đoạn Tuyệt Nàng Đi',
			singer_first: 'Phát Huy T4, ',
			singer_second: 'KProx ',
			singer_third: '',
			path: './assets/musics/song3.mp3',
			image: './assets/img/doantuyetnangdi.jpg',
			time: '03.42'
		},
		{
			name: 'Tháng Năm',
			singer_first: 'Soobin x FREAK D',
			singer_second: '',
			singer_third: '',
			path: './assets/musics/song9.mp3',
			image: './assets/img/thangnam.jpg',
			time: '03.46'
		},
		{
			name: 'Chuyện Rằng',
			singer_first: 'Thịnh Suy',
			singer_second: '',
			singer_third: '',
			path: './assets/musics/song2.mp3',
			image: './assets/img/chuyenrang.jpg',
			time: '04.02'
		},
		{
			name: 'Reality',
			singer_first: 'Janieck Devy',
			singer_second: '',
			singer_third: '',
			path: './assets/musics/song4.mp3',
			image: './assets/img/image12.jpg',
			time: '04.48'
		},
		{
			name: 'Dù Cho Mai Về Sau',
			singer_first: 'Bùi Trường Linh x FREAK D',
			singer_second: '',
			singer_third: '',
			path: './assets/music/song5.mp3',
			image: './assets/img/duchomaivesau.jpg',
			time: '03.12'
		},
		{
			name: 'Hôm Nay Em Cưới Rồi',
			singer_first: 'Khải Đăng x FREAK D',
			singer_second: '',
			singer_third: '',
			path: './assets/musics/song6.mp3',
			image: './assets/img/homnayemcuoiroi.jpg',
			time: '03.16'
		},
		{
			name: "Tình Đầu",
			singer_first: 'Tăng Duy Tân',
			singer_second: '',
			singer_third: '',
			singer: 'Charlie Puth',
			path: './assets/musics/song7.mp3',
			image: './assets/img/tinhdau.jpg',
			time: '03.50'
		},
		{
			name: 'Hạ Còn Vương Nắng',
			singer_first: 'DatKaa',
			singer_second: '',
			singer_third: '',
			path: './assets/musics/song8.mp3',
			image: './assets/img/haconvuongnang.jpg',
			time: '02.53'
		},
		{
			name: 'Hong Kong 1',
			singer_first: 'Nguyễn Trọng Tài x San Ji x Double X',
			singer_second: '',
			singer_third: '',
			path: './assets/musics/song10.mp3',
			image: './assets/img/hongkong.jpg',
			time: '06.36'
		},
	],
	defineProperties: function () {
		Object.defineProperty(this, 'currentSong', {
			get: function () {
				return this.songs[this.currentIndex];
			}
		})
	},

	render: function () {
		const htmls = this.songs.map((song, index) => {
			return `
			<li class="container_profile--layout__sum--foot_list--item ${index === this.currentIndex ? 'active' : ''} " data-index=${index}>
				 <div class="container_profile--layout__sum--foot_list--item_img" style="background-image: url('${song.image}')">
					 <i class="fas fa-play container_profile_icon"></i>
				 </div>
				 <div class="container_profile--layout__sum--foot_list--item_lable">
					 <span class="container_profile--layout__sum--foot_list--item_lable--title">${song.name}</span>
					 <span class="container_profile--layout__sum--foot_list--item_lable--info">
						 <a>${song.singer_first}</a>
						 <a>${song.singer_second}</a>
						 <a>${song.singer_third}</a>
					 </span>
				 </div>
				 <div class="container_profile--layout__sum--foot_list--item_time">
					 ${song.time}
				 </div>
				 <div class="container_profile--layout__sum--foot_list--item_more">
					 <a class="container_profile--layout__sum--foot_list--item_more-item hion-on-mobile-table">
						 <i class="fas fa-microphone "></i>
					 </a>
					 <a class="container_profile--layout__sum--foot_list--item_more-item active">
						 <i class="fas fa-heart "></i>
						 <!-- <i class="far fa-heart"></i> -->
					 </a>
					 <a class="container_profile--layout__sum--foot_list--item_more-item">
						 <i class="fas fa-ellipsis-h"></i>
					 </a>
				 </div>
			 </li>
			`
		})
		playlist.innerHTML = htmls.join('');
	},

	loadCrurentSong: function () {
		media_cd.style.backgroundImage = `url(${this.currentSong.image})`

		name_music.textContent = this.currentSong.name;
		media_author.textContent = this.currentSong.singer_first + this.currentSong.singer_second + this.currentSong.singer_third;
		media_cd.style.backgroundImage = `url(${this.currentSong.image})`
		audio.src = this.currentSong.path;

		// Load song cho mobile  
		const name_music_mobile = $('.listen_mobile--player_right--song_name');
		const author_mobile = $('.listen_mobile--player_right--authur');
		const img_mobile = $('.listen_mobile--player_right--img')
		name_music_mobile.textContent = this.currentSong.name;
		author_mobile.textContent = this.currentSong.singer_first + this.currentSong.singer_second + this.currentSong.singer_third;
		img_mobile.style.backgroundImage = `url(${this.currentSong.image})`;
	},
	handEvents: function () {
		const scrooll = $('.container');

		scrooll.onscroll = function () {
			const srollTop_container = scrooll.scrollTop;
			if (srollTop_container == 0) {
				$('.container_header').style.backgroundColor = 'transparent';
				$('.container_header').style.boxShadow = 'none';
			} else {
				$('.container_header').style.backgroundColor = 'var(--primary-color)';
				$('.container_header').style.boxShadow = '0 3px 5px var(--sticky-header-box-shadow)';
			}

		}
		const _this = this;
		// xử lý cd quay 
		const media_cd_Animate = media_cd.animate([
			{
				transform: 'rotate(360deg)'
			}
		], {
			duration: 10000,
			iterations: Infinity,
		})
		media_cd_Animate.pause();

		// Xử lý khi click vào phát nhạc
		players.onclick = function () {
			if (_this.isplaying) {
				audio.pause();
			} else {
				audio.play();
			}
		}

		// Xử lý khi click vào phát nhạc trên mobile
		players_mobile.onclick = function () {
			if (_this.isplaying) {
				audio.pause();
			} else {
				audio.play();
			}
		}


		audio.onplay = function () {
			players.classList.add('active_player');
			players_mobile.classList.add('active');
			_this.isplaying = true;
			media_cd_Animate.play();
		}

		// khi được pause
		audio.onpause = function () {
			players.classList.remove('active_player');
			players_mobile.classList.remove('active');
			_this.isplaying = false;
			media_cd_Animate.pause();
		}

		// Xử lý next bài hát
		nextBtn.onclick = function () {
			if (_this.isRandom) {
				_this.playRandomSong();
			} else {
				_this.nextSong();
			}
			audio.play();
			_this.render();
			_this.scrollToactiveSong();
		}

		// Xử lý next bài hát cho mobile 
		nextBtn_mobile.onclick = function () {
			if (_this.isRandom) {
				_this.playRandomSong();
			} else {
				_this.nextSong();
			}
			audio.play();
			_this.render();
			_this.scrollToactiveSong();
		}

		// Xử lý click quay lại bài hát 
		prevBtn.onclick = function () {
			if (_this.isRandom) {
				_this.playRandomSong();
			} else {
				_this.prevSong();
			}
			audio.play();
			_this.render();
			_this.scrollToactiveSong();
		}
		// chức năng bật tắt random bài hát 
		randomBtn.onclick = function () {
			_this.isRandom = !_this.isRandom;
			this.parentNode.classList.toggle('active_redo', _this.isRandom);
		}


		// xử lý quay lại bài hát đó 
		repeatBtn.onclick = function () {
			_this.isRepeat = !_this.isRepeat;
			this.parentNode.classList.toggle('active_redo', _this.isRepeat);
		}
		// khi tiến độ bài hát thay đổi khi
		audio.ontimeupdate = function () {
			const time_start = $('.controls_time--right');
			const time_count = $('.controls_time--left');

			if (audio.duration) {
				const time_percent = Math.floor((audio.currentTime / audio.duration) * 100);
				time_range.value = time_percent;


				// Xử lý tính thời gian của bài hát  
				var e = Math.floor(audio.currentTime);
				var d = e % 60;
				var b = Math.floor(e / 60);
				if (d < 10) {
					var c = 0;
				} else {
					c = "";
				}
				time_start.textContent = '0' + b + ":" + c + d;

				var ee = Math.floor(audio.duration);
				var dd = ee % 60;
				var bb = Math.floor(ee / 60);
				if (dd < 10) {
					var cc = 0;
				} else {
					cc = "";
				}

				time_count.innerHTML = '0' + bb + ":" + cc + dd;

			}
		}

		// xử lý khi tua bài hát nhạc
		time_range.oninput = function (e) {
			const seek_time = ((e.target.value / 100) * audio.duration)
			audio.currentTime = seek_time;
			audio.play();
		}

		// xử lý âm thanh bài hát 
		volume_change.oninput = function (e) {
			audio.volume = e.target.value / 100;
		}


		// xử lý next song khi audio end( bài hát kết thúc)
		audio.onended = function () {
			if (_this.isRepeat)
				audio.play();
			else
				nextBtn.click();
		}

		// lắng nghe hành vi vào play list, kích trúng cái nào thì trả về cái đó
		playlist.onclick = function (e) {

			const songNode = e.target.closest('.container_profile--layout__sum--foot_list--item:not(.active)');
			if (songNode
				|| e.target.closest('.container_profile--layout__sum--foot_list--item_more-item')
			) {
				// Xử lý click vào song 
				if (songNode) {
					_this.currentIndex = Number(songNode.dataset.index);

					_this.loadCrurentSong();
					_this.render();
					audio.play();
				}


			}

		}



	},
	nextSong: function () {
		this.currentIndex++;
		if (this.currentIndex === this.songs.length) {
			this.currentIndex = 0;
		}
		this.loadCrurentSong();
	},

	prevSong: function () {
		this.currentIndex--;
		if (this.currentIndex < 0) {
			this.currentIndex = this.songs.length - 1;
		}
		this.loadCrurentSong();
	},
	playRandomSong: function () {
		let newIndex;
		do {
			newIndex = Math.floor(Math.random() * this.songs.length);
		} while (newIndex == this.currentIndex)
		this.currentIndex = newIndex;
		this.loadCrurentSong();
	},
	scrollToactiveSong: function () {
		setTimeout(function () {
			if (this.currentIndex == 0) {
				$('.container_profile--layout__sum--foot_list--item.active').scrollIntoView({
					behaviour: 'smooth',
					block: 'end',
				});
			} else {
				$('.container_profile--layout__sum--foot_list--item.active').scrollIntoView({
					behaviour: 'smooth',
					block: 'nearest',
				});
			}
		}, 300)
	},

	start: function () {
		this.defineProperties();
		this.handEvents();
		this.loadCrurentSong();
		this.render();
	},


}
Music.start();