import playList from "./playlist.js"

const audio = () => {

    const playBtn = document.querySelector('.play')
    const audio = document.querySelector('audio')
    const playPrevBtn = document.querySelector('.play-prev')
    const playNextBtn = document.querySelector('.play-next')


    let isPlay = false
    let playNum = 0;


    function createPlayList() {
        for (let i = 0; i < playList.length; i++) {
            const li = document.createElement('li');
            const list = document.querySelector('.play-list')
            li.textContent = playList[i].title
            li.classList.add('play-item')
            list.append(li)
        }
    }

    createPlayList()

    function selectActiveElement(number) {
        for (let element of document.querySelector('.play-list').children) {
            element.classList.remove('item-active');
        }
        document.querySelector('.play-list').children[number].classList.add('item-active');
    }

    function playAudio() {
        playBtn.classList.add('pause')
        isPlay = true
        audio.currentTime = 0;
        audio.src = playList[playNum].src;
        audio.play()
        selectActiveElement(playNum)
    }

    function pauseAudio() {
        audio.pause()
        isPlay = false
        playBtn.classList.remove('pause')
    }

    function renderAudio() {
        if (!isPlay) {
            playAudio()
        } else {
            pauseAudio()
        }
    }

    function playPrev() {
        playNum -= 1
        playAudio()
    }

    function playNext() {
        playNum += 1
        playAudio()
    }

    playBtn.addEventListener('click', renderAudio)
    playPrevBtn.addEventListener('click', playPrev)
    playNextBtn.addEventListener('click', playNext)

}


export default audio;