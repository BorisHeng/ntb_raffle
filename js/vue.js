$(document).on("click", "a", function (event) {
  let target = $(this).attr("href");
  console.log(target);
  if (
    target == "#jumbotron" ||
    target == "#sectiom_info" ||
    target == "#sectiom_mv"
  ) {
    event.preventDefault(); //不執行預設動作
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      500
    );
  }
});

let play1 = false;
let play2 = false;

function onYouTubeIframeAPIReady() {
  let player1;
  player1 = new YT.Player("YouTubeVideoPlayerAPI1", {
    videoId: "s8qiB8aZ17Y", // YouTube 影片ID
    width: "1080", // 播放器寬度 (px)
    height: "720", // 播放器高度 (px)
    playerVars: {
      controls: 0, // 顯示播放器
      disablekb: 0,
      fs: 0,
      rel: 0,
      showinfo: 0, // 隱藏影片標題
      modestbranding: 1, // 隱藏YouTube Logo
      cc_load_policty: 0, // 隱藏字幕
      iv_load_policy: 3, // 隱藏影片註解
      autohide: 1, // 影片播放時，隱藏影片控制列
    },
    events: {
      onStateChange: onPlayerStateChange1,
    },
  });
  let player2;
  player2 = new YT.Player("YouTubeVideoPlayerAPI2", {
    videoId: "s8qiB8aZ17Y", // YouTube 影片ID
    width: "1080", // 播放器寬度 (px)
    height: "720", // 播放器高度 (px)
    playerVars: {
      controls: 0, // 顯示播放器
      disablekb: 0,
      fs: 0,
      rel: 0,
      showinfo: 0, // 隱藏影片標題
      modestbranding: 1, // 隱藏YouTube Logo
      cc_load_policty: 0, // 隱藏字幕
      iv_load_policy: 3, // 隱藏影片註解
      autohide: 1, // 影片播放時，隱藏影片控制列
    },
    events: {
      onStateChange: onPlayerStateChange2,
    },
  });
}

function onPlayerStateChange1(e) {
  if (e.data == 0) {
    play1 = true;
  }
}
function onPlayerStateChange2(e) {
  if (e.data == 0) {
    play2 = true;
  }
}

if (play1 && play2) {
  $(".Btn-1").css("display: block;");
}
