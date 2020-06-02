// import { existentialTypeParam } from "babel-types";
// 導覽跳轉
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

// YT連結
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
    checkUserState();
  }
}
function onPlayerStateChange2(e) {
  if (e.data == 0) {
    play2 = true;
    checkUserState();
  }
}
function checkUserState() {
  if (play1 && play2) {
    $(".Btn-1").css({ height: "100%" });
  }
}
// 開啟問卷
function openQuestion(e) {
  switch (e) {
    case 1:
      $("#question1").addClass("menuOpen");
      $("#question1").show();
      $("#app").hide();
      break;
  }
}
// 關閉問卷
function exit(e) {
  $("#question1").removeClass("menuOpen");
  $("#finished").removeClass("menuOpen");
  $("#app").show();
}

// 確認答案
function checkAnswer() {
  let checked = true;
  if ($("input[name = question1]:checked").val() != "D") {
    $("#question1ms").text("答案為D. 以上皆是");
    checked = false;
  } else {
    $("#question1ms").text("");
  }
  if ($("input[name = question2]:checked").val() != "A") {
    $("#question2ms").text("答案為A. 是");
    checked = false;
  } else {
    $("#question2ms").text("");
  }
  if ($("input[name = question3]:checked").val() != "B") {
    $("#question3ms").text("答案為B. 否");
    checked = false;
  } else {
    $("#question3ms").text("");
  }
  if ($("input[name = question4]:checked").val() != "B") {
    $("#question4ms").text("答案為B. 健保卡");
    checked = false;
  } else {
    $("#question4ms").text("");
  }
  if ($("input[name = question5]:checked").val() != "A") {
    $("#question5ms").text("答案為A. 一切透明 值得你信任");
    checked = false;
  } else {
    $("#question5ms").text("");
  }
  if (checked) {
    $("#question1").hide();
    $("#question1").removeClass("menuOpen");
    $("#finished").addClass("menuOpen");
  }
}

// 確認使用者輸入
function checkUser(evt) {
  let checkUserInput = true;
  let identity_number = $("input[name=identity_number]").val();
  if (!identity_number) {
    $("#idMs").text("此處為必填");
    checkUserInput = false;
  } else if (identity_number.search(/^[a-z](1|2)\d{8}$/i) == -1) {
    $("#idMs").text("身分證格式不正確");
    checkUserInput = false;
  } else {
    $("#idMs").text("");
  }

  let name = $("input[name=name]").val();
  let nameCheck = true;
  for (let index = 0; index < name.length; index++) {
    if (name.charCodeAt(index) < 0x4e00 || name.charCodeAt(index) > 0x9fa5) {
      nameCheck = false;
    }
  }
  if (!name) {
    $("#nameMs").text("此處為必填");
    checkUserInput = false;
  } else if (!nameCheck) {
    $("#nameMs").text("請輸入中文名稱");
    checkUserInput = false;
  } else {
    $("#nameMs").text("");
  }

  let phone = $("input[name=phone]").val();
  if (!phone) {
    $("#phoneMs").text("此處為必填");
    checkUserInput = false;
  } else if (phone.search(/^[0][9]\d{8}$/) == -1) {
    $("#phoneMs").text("格式有誤");
    checkUserInput = false;
  } else {
    $("#phoneMs").text("");
  }

  let email = $("input[name=email]").val();
  if (!email) {
    $("#emailMs").text("此處為必填");
    checkUserInput = false;
  } else if (
    email.search(
      /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    ) == -1
  ) {
    $("#emailMs").text("格式有誤");
    checkUserInput = false;
  } else {
    $("#emailMs").text("");
  }

  let address = $("input[name=address]").val();
  if (!address) {
    $("#addressMs").text("此處為必填");
    checkUserInput = false;
  } else if (address.search(/^[\u4E00-\u9FA5A-Za-z0-9\-]+$/) == -1) {
    $("#addressMs").text("格式有誤");
    checkUserInput = false;
  } else {
    $("#addressMs").text("");
  }

  if (checkUserInput) {
    sendDB();
  }
}

function sendDB(evt) {
  $.ajax({
    url: "",
    data: $("#" + evt).serializeArray(),
    type: "post",
    async: true,
    cache: true,
    dataType: "json",
    success: function (data) {
      window.location.reload();
    },
    error: function (res) {
      console.log(res);
      window.location.reload();
    },
  });
}
