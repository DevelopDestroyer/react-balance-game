import React, { useState, useEffect } from 'react';

function Credits() {

    useEffect(() => {
        document.getElementById("musicBox").volume = 0.3;
    }, []);
    
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
                        EHO
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
                        귤<br />
                        씨제이<br />
                        히요<br />
                        리아<br />
                        보호<br />
                        김예빈<br />
                        솔<br />
                        아형이<br />
                        서연<br />
                        애기문어<br />
                        조아양이에양<br />
                        딩딩이<br />
                        젠즈<br />
                        이이<br />
                        생학<br />
                        웅이<br />
                        순수동호<br />
                        갱갱2<br />
                        김재윤<br />
                        Minhaz<br />
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
                        <a href="https://www.youtube.com/" target="_blank">☞ 유튜브 </a><br/><br/>
                        <a href="https://cafe.naver.com/" target="_blank">☞ 카페 바로가기 </a><br/><br/>
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
            <audio autoPlay controls loop id="musicBox">
                <source src="assets/music2.mp3" type="audio/mp3" />
            </audio>
        </article>
    );

}
export default Credits;