const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cd = $('.cd');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')
const PLAYER_STORAGE_KEY = 'F8-Player'
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},

    songs: [{
            name: 'AI CHUNG TÌNH ĐƯỢC MÃI',
            singer: 'ĐINH TÙNG HUY',
            path: '/asset/audio/AI CHUNG TÌNH ĐƯỢC MÃI - ĐINH TÙNG HUY - OFFICIAL MUSIC VIDEO.mp3',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/5/a/d/e/5adeca0a259744a3b621fdbc5434e636.jpg'
        },
        {
            name: 'Hoa Nở Không Màu',
            singer: 'Hoài Lâm',
            path: '/asset/audio/Hoa Nở Không Màu - Hoài Lâm - Acoustic Version.mp3',
            image: 'https://yt3.ggpht.com/ytc/AMLnZu89lZeCXUTxxEK3TI10jWldh9My5Fc79fbohTnLdw=s900-c-k-c0x00ffffff-no-rj'
        },
        {
            name: 'CHIỀU HÔM ẤY',
            singer: 'JayKii',
            path: '/asset/audio/JayKii - CHIỀU HÔM ẤY (Official MV).mp3',
            image: 'https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/0/7/9/7079e2378be283d04db6cd9825b2220b.jpg'
        },
        {
            name: 'Những Bản Lofi Việt Nhẹ Nhàng Cực Chill',
            singer: 'Nhạc Lofi Chill Buồn Nhất 2022 - Lofi Gây Nghiện Hay Nhất',
            path: '/asset/audio/Những Bản Lofi Việt Nhẹ Nhàng Cực Chill - Nhạc Lofi Chill Buồn Nhất 2022 - Lofi Gây Nghiện Hay Nhất.mp3',
            image: 'https://i.ytimg.com/vi/0uwUjJMCg_s/maxresdefault.jpg'
        },
        {
            name: 'Nếu Là Anh',
            singer: 'The Men',
            path: '/asset/audio/The Men - Nếu Là Anh - Official MV.mp3',
            image: 'https://media.ngoisao.vn/news/2015/10/12/tien-dung-the-men-xay-dung-lai-hinh-anh-bo-mac-trai-hu001-ngoisao.vn.jpg'
        },
        {
            name: 'VÌ MẸ ANH BẮT CHIA TAY',
            singer: 'MIU LÊ x KARIK x CHÂU ĐĂNG KHOA',
            path: '/asset/audio/VÌ MẸ ANH BẮT CHIA TAY - MIU LÊ x KARIK x CHÂU ĐĂNG KHOA - Official MV.mp3',
            image: 'https://i.ytimg.com/vi/S7ElVoYZN0g/maxresdefault.jpg'
        },
        {
            name: 'Yêu 3',
            singer: 'Rhymastic',
            path: '/asset/audio/Yêu 3 (Acapella) - Rhymastic [Video Lyrics].mp3',
            image: 'https://static2.yan.vn/YanNews/202008/202008040123221554-1ebe653d-3f05-4dc7-a67a-576abf80704f.png'
        },
        {
            name: 'BÔNG HOA ĐẸP NHẤT',
            singer: 'QUÂN A.P',
            path: '/asset/audio/QUÂN A.P - BÔNG HOA ĐẸP NHẤT [OFFICIAL LYRICS VIDEO].mp3',
            image: 'https://spartabeerclub.vn/media/images/article/506/quan-ap-la-nam-ca-si-dien-trai.jpg'
        },
        {
            name: 'YÊU 5',
            singer: 'Rhymastic',
            path: '/asset/audio/Lyrics -- YÊU 5 - Rhymastic.mp3',
            image: 'https://d9nqqwcssctr8.cloudfront.net/wp-content/uploads/2020/05/21121143/Lyrics-logo-1.png'
        }
    ],
    setConfig: function(key, value) {
        this.config[key] = value
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config))
    },
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
        <div class="song ${index=== this.currentIndex?'active':''}" data-index='${index}'>
        <div class="thumb" style="background-image: url('${song.image}')">
        </div>
        <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
        </div>
        <div class="option">
            <i class="fas fa-ellipsis-h"></i>
        </div>
    </div>`
        })
        playlist.innerHTML = htmls.join('');
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function() {
        const _this = this;
        // xử lý phóng to thu nhỏ play
        const cdWidth = cd.offsetWidth;
        // xuwr lys cd quay/dung
        const cdThumbAnimate = cdThumb.animate([{
            transform: 'rotate(360deg)'
        }], {
            duration: 100000, //10 giay
            iteration: Infinity
        })
        cdThumbAnimate.pause()
        document.onscroll = function() {
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const newCdWidth = cdWidth - scrollTop
                cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
                cd.style.opacity = newCdWidth / cdWidth;
            }
            // xử lý kik play
        playBtn.onclick = function() {
                if (_this.isPlaying) {
                    audio.pause()
                    cdThumbAnimate.pause()
                } else {
                    audio.play()
                    cdThumbAnimate.play()
                }
            }
            // khi song đuoc play
        audio.onplay = function() {
                _this.isPlaying = true;
                player.classList.add('playing');


            }
            // khi song bi pause
        audio.onpause = function() {
                _this.isPlaying = false;
                player.classList.remove('playing');
            }
            // khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
                if (audio.duration) {
                    const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                    progress.value = progressPercent
                }
            }
            // xu ly khi tua 
        progress.onchange = function(e) {
                const progressTarget = Math.floor((audio.duration / 100) * e.target.value)
                audio.currentTime = progressTarget
            }
            // khi next song
        nextBtn.onclick = function() {

            if (_this.isRandom) {
                _this.playRandomSOng()

            } else {
                _this.nextSong()
            }
            audio.play()
            _this.render()
            _this.scrollToActiveSong()
        }
        prevBtn.onclick = function() {
                if (_this.isRandom) {
                    _this.playRandomSOng()
                } else {
                    _this.prevSong()
                }
                audio.play()
                _this.render()

            }
            // xu ly bat tat random song
        randomBtn.onclick = function(e) {
                _this.isRandom = !_this.isRandom
                _this.setConfig('isRandom', _this.isRandom)
                randomBtn.classList.toggle('active', _this.isRandom)

            }
            // xu ly next sau khi audio ended
        audio.onended = function() {
                if (_this.isRepeat) {
                    audio.play()
                } else nextBtn.click()
            }
            // xu ly lap lai song
        repeatBtn.onclick = function() {
                _this.isRepeat = !_this.isRepeat
                _this.setConfig('isRepeat', _this.isRepeat)

                repeatBtn.classList.toggle('active', _this.isRepeat)
            }
            // lắng nghe click vào playlist
        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)')
                // su ly khi click vao song
            if (songNode || e.target.closest('.option')) {
                //su ly click vao song
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    audio.play()

                }

            }
        }
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            })
        }, 300);
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path;

    },
    loadConfig: function() {
        this.isRandom = this.config.isRandom
        this.isRepeat = this.config.isRepeat
    },
    nextSong: function() {
        this.currentIndex++
            if (this.currentIndex >= this.songs.length) { this.currentIndex = 0 }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
            if (this.currentIndex < 0) { this.currentIndex = this.songs.length - 1 }
        this.loadCurrentSong()
    },
    playRandomSOng: function() {

        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex === this.currentIndex)

        this.currentIndex = newIndex
        this.loadCurrentSong()

    },
    start: function() {
        // gan cau hinh tu config vao ung dung
        this.loadConfig()
            // định nghia các thuộc tính cho object
        this.defineProperties()
            // tải thông tin bài đầu tiên vào ứng dụng khi chạy
        this.handleEvents()
            // lắng nghe và sử lý các sự kiện
        this.loadCurrentSong()
            // render lại ds bài hát
        this.render()
            // hien thi trang thai ban dau cua btn repeat va random
        randomBtn.classList.toggle('active', this.isRandom)
        repeatBtn.classList.toggle('active', this.isRepeat)


    }
}
app.start()