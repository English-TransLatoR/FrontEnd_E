import './style.css';

function Main() {
  return (
    <div className='app-container'>
      <header>
        <div id="logo">
          ETLR
        </div>
        <div id="googlelogin">
          구글 계정으로 계속하기
        </div>
      </header>
      <div id="mainbody">
        <div id="left">
          <div id="recent">
            최근에 입력한 문장
          </div>
          <div id="ten">
            <textarea name="" class="recentten ellipsis-textarea nine" cols="30" rows="10">안녕하세요</textarea>
            <textarea name="" class="recentten ellipsis-textarea nine" cols="30" rows="10">ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ</textarea>
            <textarea name="" class="recentten ellipsis-textarea nine" cols="30" rows="10"></textarea>
            <textarea name="" class="recentten ellipsis-textarea nine" cols="30" rows="10"></textarea>
            <textarea name="" class="recentten ellipsis-textarea nine" cols="30" rows="10"></textarea>
            <textarea name="" class="recentten ellipsis-textarea nine" cols="30" rows="10"></textarea>
            <textarea name="" class="recentten ellipsis-textarea nine" cols="30" rows="10"></textarea>
            <textarea name="" class="recentten ellipsis-textarea nine" cols="30" rows="10"></textarea>
            <textarea name="" class="recentten ellipsis-textarea nine" cols="30" rows="10"></textarea>
            <textarea name="" class="recentten ellipsis-textarea nine" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div id="right">
          <div style="height: 369px; border-bottom: 1px solid black;">
            <div id="korean">
              KOREAN
            </div>
            <textarea name="" id="upper" cols="30" rows="10"></textarea>
            <div id="translate">번역하기</div>
          </div>
          <div>
            <div id="english">
              ENGLISH
            </div>
            <textarea name="" id="lower" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
