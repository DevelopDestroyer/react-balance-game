import './App.css';
import Game from'./Game';
import React, { useState } from 'react';

function App() {
  const [tabsActive, setTabsActive] = useState({
    tab1: true,
    tab2: false,
    tab3: false,
    tab4: false,
  });
  const [tabsIcon, setTabsIcon] = useState({
    tab1: "icon solid fa-home",
    tab2: "icon solid fa-folder",
    tab3: "icon solid fa-envelope",
    tab4: "icon brands fa-youtube",
  });

  const changeTab = (target) => {
    console.log("테스트 입니다");
    console.log(target);
    console.log(tabsActive);
    console.log(tabsIcon);
    let changeTabResult = [false, false, false, false];
    changeTabResult[target-1] = true;
    setTabsActive((prevState) => ({
      ...prevState,
      tab1: changeTabResult[0],
      tab2: changeTabResult[1],
      tab3: changeTabResult[2],
      tab4: changeTabResult[3],
    }));
  }

  return (
    <div className="App">
      {/* Nav */}
      <nav id="nav">
        <a href="#" class={ tabsIcon.tab1 + ( tabsActive.tab1 == true ? " active" : "") } onClick={()=>changeTab(1)} ><span>Home</span></a>
        <a href="#" class={ tabsIcon.tab2 + ( tabsActive.tab2 == true ? " active" : "") } onClick={()=>changeTab(2)} ><span>Work</span></a>
        <a href="#" class={ tabsIcon.tab3 + ( tabsActive.tab3 == true ? " active" : "") } onClick={()=>changeTab(3)} ><span>Contact</span></a>
        <a href="https://twitter.com/ajlkn" class={ tabsIcon.tab4 + ( tabsActive.tab4 == true ? " active" : "") } onClick={()=>changeTab(4)} ><span>Twitter</span></a>
      </nav>
      <div id="main">

        {/* Me */}
        { tabsActive.tab1 && (
        <article id="home" class="panel intro">
          <header>
            <h1>밸런스 게임</h1>
            <p>밸런스 게임에 오신 것을 환영합니다 :)</p>
          </header>
          <a href="#" onClick={()=>changeTab(2)} class="jumplink pic">
            <span class="arrow icon solid fa-chevron-right"><span>See my work</span></span>
            <img src="images/me.jpg" alt="" />
          </a>
        </article>
        )}
      

        {/* Work */}
        { tabsActive.tab2 && (<Game />
        )}

        {/* Contact */}
        { tabsActive.tab3 && (
        <article id="contact" class="panel">
          <header>
            <h2>Contact Me</h2>
          </header>
          <form action="#" method="post">
            <div>
              <div class="row">
                <div class="col-6 col-12-medium">
                  <input type="text" name="name" placeholder="Name" />
                </div>
                <div class="col-6 col-12-medium">
                  <input type="text" name="email" placeholder="Email" />
                </div>
                <div class="col-12">
                  <input type="text" name="subject" placeholder="Subject" />
                </div>
                <div class="col-12">
                  <textarea name="message" placeholder="Message" rows="6"></textarea>
                </div>
                <div class="col-12">
                  <input type="button" value="Send Message" onClick={() => {alert("준비중 입니다."); return false;}} />
                </div>
              </div>
            </div>
          </form>
        </article>
        )}

      </div>
    </div>
  );
}

export default App;
