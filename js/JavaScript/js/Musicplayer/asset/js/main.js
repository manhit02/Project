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
            name: 'ahihi',
            singer: 'manh',
            path: '../audio/1.mp3',
            image: './1109233.png'
        },
        {
            name: 'ahihi1',
            singer: 'manh1',
            path: '../audio/1.mp3',
            image: './1109233.png'
        },
        {
            name: 'ahihi2',
            singer: 'manh1',
            path: '../audio/1.mp3',
            image: '../img/1110822.png'
        },
        {
            name: 'ahihi3',
            singer: 'manh1',
            path: '../audio/1.mp3',
            image: '../img/1114243.png'
        },
        {
            name: 'ahihi4',
            singer: 'manh1',
            path: '../audio/1.mp3',
            image: '../img/1114249.png'
        },
        {
            name: 'ahihi5',
            singer: 'manh1',
            path: '../audio/1.mp3',
            image: '../img/1114875.png'
        },
        {
            name: 'ahihi6',
            singer: 'manh1',
            path: '../audio/1.mp3',
            image: '../img/1121702.png'
        },
        {
            name: 'ahihi7',
            singer: 'manh1',
            path: '../audio/1.mp3',
            image: '../img/1124265.png'
        },
        {
            name: 'ahihi8',
            singer: 'manh1',
            path: '../audio/1.mp3',
            image: '../img/1127036.png'
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