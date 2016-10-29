(() => {
  class Video {
    constructor(item) {
      this.content = item.querySelector('.video__content');
      this.play = item.querySelector('.video__play-btn');
      this.frame = item.querySelector('.video__frame');
      this.thumb = item.querySelector('.video__thumb');
      this.src = this.play.href;
      this.play.addEventListener('click', this.onClick.bind(this));
    }

    playVideo() {
      this.play.style.display = 'none';
      this.thumb.style.display = 'none';
    }

    onClick(e) {
      e.preventDefault();
      this.frame.width = this.content.offsetWidth;
      this.frame.height = this.content.offsetHeight;
      this.frame.src = this.src + '?autoplay=1';      
      this.content.classList.add('video--playing');
    }
  }

  const videos = [].slice.call(document.querySelectorAll('.video')).map(item => new Video(item));
  console.log(videos);
})();
