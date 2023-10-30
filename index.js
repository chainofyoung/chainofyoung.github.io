export default function MyApp() {
  var timer; // 타이머
  var schInterval;
  var userAgent = navigator.userAgent.toLowerCase();
  var isAndroid = userAgent.search("android") > -1;
  var isIOS = !isAndroid && /iphone|ipad|ipod/i.test(userAgent);
  var os;

  function mo_chk() {
    alert("a");

    var mobile = /iphone|ipad|ipod|android/i.test(
      navigator.userAgent.toLowerCase()
    );

    if (mobile) {
      var userAgent = navigator.userAgent.toLowerCase();
      if (userAgent.search("android") > -1) {
        return (os = "android");
      } else if (
        userAgent.search("iphone") > -1 ||
        userAgent.search("ipod") > -1 ||
        userAgent.search("ipad") > -1
      ) {
        return (os = "ios");
      } else {
        return (os = "otehr");
      }
    } else {
      return (os = "pc");
    }
  }

  mo_chk();

  function participate() {
    alert("b");
    // 인터벌, 타이머 삭제
    function clearTimer() {
      clearInterval(schInterval);
      clearTimeout(timer);
    }

    // 인터벌 마다 동작할 기능
    function intervalSch() {
      // 매 인터벌 마다 웹뷰가 활성화 인지 체크
      if (document.webkitHidden || document.hidden) {
        // 웹뷰 비활성화
        clearTimer(); // 앱이 설치되어있을 경우 타이머 제거
      } else {
        // 웹뷰 활성화
        console.log("타이머 동작");
      }
    }

    // 앱 실행(iOS인 경우)
    //location.href = "coco://parameter=1111";

    // 앱이 설치 되어있는지 체크
    schInterval = setInterval(intervalSch, 500);

    timer = setTimeout(function () {
      if (isAndroid) {
        alert("c");
        location.href =
          "https://play.google.com/store/apps/details?id=com.twitter.android&hl=ko";
      } else if (isIOS) {
        alert("d");
        //location.href ="https://apps.apple.com/kr/app/twitter/id1482454543";
        location.href = "https://cocoforet.com/app";
      }
      clearInterval(schInterval);
    }, 2000);
  }

  participate();

  var iframe = document.createElement("iframe");
  iframe.style.visibility = "hidden";
  iframe.src = "coco://parameter=1111";
  document.getElementById("bob").appendChild(iframe);
  document.getElementByName("bob").removeChild(iframe);

  return (
    <div>
      <body>
        <h1 class="logo">
          <a href="/"></a>
        </h1>
      </body>
    </div>
  );
}
