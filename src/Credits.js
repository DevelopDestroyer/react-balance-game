import React, { useState, useEffect } from 'react';

function Credits() {
    return (
        <article id="contact" class="panel">
            <header>
                <h2>Thanks for playing</h2>
            </header>

            <marquee direction="up" height="500px">
                <center>
                    <h3>Production support</h3>
                    <p>
                        정예다움 알바
                    </p>

                    <h3>Development</h3>
                    <p>
                        EHO<br />(DevelopDestroyer)
                    </p>

                    <h3>Sound supervisor</h3>
                    <p>
                        해니
                    </p>

                    <h3>Pre investigation</h3>
                    <p>
                        김정달<br />
                        매니주리<br />
                        익생<br />                        
                        탈모<br />
                        씨제이<br />
                        순수동호<br />
                        　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　<br />
                    </p>

                    <h3>History</h3>
                    <p>
                        <b>서비스 오픈 (1.0.0 ver)</b><br />
                        2022.04.00 ~ 현재<br /><br />
                        <b>Dev (0.0.1 ver)</b><br />
                        2022.04.01 ~ 
                    </p>

                    <h3>Reference</h3>
                    <p>
                        <a href="https://www.youtube.com/channel/UCapFukcEW7i01t4VpUY1Kxg" target="_blank">☞ 유튜브 김정달 채널 바로가기 </a><br/><br/>
                        <a href="https://cafe.naver.com/jeongdal" target="_blank">☞ 달식파 카페 바로가기 </a><br/><br/>
                        ☞ 웹페이지 개발문의<br />
                        developdestroyer@gmail.com 이태호<br /><br />
                        ☞ 나만의 맛집 지도 만들기<br />
                        구글플레이스토어에서 '그맛' 검색<br/>
                        웹으로 보려면 <a href="http://geumat.iwinv.net/" target="_blank">여기 클릭</a>
                    </p>

                    <h2>감사합니다 :)</h2>

                </center>
            </marquee>

            <br />
            <br />
            <audio autoPlay controls loop>
                <source src="assets/music2.mp3" type="audio/mp3" />
            </audio>
        </article>
    );

}
export default Credits;