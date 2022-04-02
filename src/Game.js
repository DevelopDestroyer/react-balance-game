import React, { useState, useEffect } from 'react';

function Game() {
    /**
     * ** 데이터셋 가이드
     * 1. quizSet 변수의 length갯수 만큼, friendsSet[n].answer 길이를 모두 동일하게 해주세요.
     */
    const friendsSet = [
        {
            id: 0,
            name: "이태호",
            answer: "aaaa",
            photo: "1.jpg",
            introduce: "친구들 중에서 제일 개발을 잘해요",
        },
        {
            id: 1,
            name: "추대윤",
            answer: "aaab",
            photo: "2.jpg",
            introduce: "클라이밍 밖에 모르는 소심부끄남",
        },
        {
            id: 2,
            name: "안재홍",
            answer: "bbaa",
            photo: "3.jpg",
            introduce: "해산물 먹는걸 좋아해요",
        },
        {
            id: 3,
            name: "이진영",
            answer: "bbab",
            photo: "4.jpg",
            introduce: "마음씨도 착하고 디자인도 제일 잘하는 I인척하는 슈퍼 E",
        },
    ];
    const quizSet = [
        {
            id: 0,
            question: "평생 짜장면만 먹기 VS 평생 군만두만 먹기",
            option1: "평생 짜장면",
            option2: "평생 군만두",
        },
        {
            id: 1,
            question: "일주일 동안 머리 감기 불가 VS 일주일 양치질 불가",
            option1: "머리에서 냄새나기",
            option2: "입에서 냄새나기",
        },
        {
            id: 2,
            question: "1년간 핸드폰 안하면 1억 VS 그냥 돈 안받고 핸드폰쓰기",
            option1: "1억받기",
            option2: "그냥살기",
        },
        {
            id: 3,
            question: "당신은 감성적인가요 이성적인가요",
            option1: "감성",
            option2: "이성",
        },        
    ];
    const [userData, setUserData] = useState({
        pivot: 0,
        answer: "",
        state: "GAME", /** GAME: 게임 중, COMPLETE: 게임 대기 중, RESULT: 결과화면 */
        friendId: null,
        score: [],
        rank1idx: null,
        rank2idx: null,
    });

    useEffect(() => {
        if (userData.answer.length == quizSet.length) {
            calculResult();
        }
    }, [userData.answer]);
    
    const selectOption = (answer) => {
        let nextPivot = userData.pivot;
        if (userData.pivot >= quizSet.length - 1) {
            setUserData((prevState) => ({
                ...prevState,
                answer: prevState.answer + answer + "",
                state: "COMPLETE",
            }));
            console.log("case1" + userData.answer);
            setTimeout(function() {
                setUserData((prevState) => ({
                    ...prevState,
                    state: "RESULT",
                }));
              }, 3000);
        }
        else {
            nextPivot++;
            setUserData((prevState) => ({
                ...prevState,
                answer: prevState.answer + answer + "",
                pivot: nextPivot,
            }));
        }
    }

    const calculResult = () => {
        let resultArr = [];
        for (let i = 0; i < friendsSet.length; i++) {
            console.log(i + ": " + userData.answer + ", " + friendsSet[i].answer + " : " + hammingDistance(userData.answer, friendsSet[i].answer));
            resultArr.push(hammingDistance(userData.answer, friendsSet[i].answer));
        }
        console.log("해밍디스턴스 결과");
        console.log(resultArr);

        setUserData((prevState) => ({
            ...prevState,
            score: resultArr,
        }));
    }

    const hammingDistance = (str1 = '', str2 = '') => {
        if (str1.length !== str2.length) {
           return 0;
        }
        let dist = 0;
        for (let i = 0; i < str1.length; i += 1) {
           if (str1[i] !== str2[i]) {
              dist += 1;
           };
        };
        return dist;
     };    

    return (
        <article id="work" class="panel">
            {userData.state == "GAME" && (
                <>
                    <header>
                        <h2>{quizSet[userData.pivot].question}</h2>
                    </header>
                    <p>
                        <input type="button" value={quizSet[userData.pivot].option1} onClick={() => selectOption("a")} />　　
                        <input type="button" value={quizSet[userData.pivot].option2} onClick={() => selectOption("b")} />
                    </p>
                    <br />
                    <h5>{quizSet.length} 문항 중 {userData.pivot + 1} 번째</h5>
                </>
            )}
            {userData.state == "COMPLETE" && (
                <>
                    <header>
                        <h2>결과 분석 중 입니다.</h2>
                    </header>
                </>
            )}
            {userData.state == "RESULT" && (
                <>
                    <header>
                        <h2>당신의 이상형은 *** 입니다 ! { userData.score }</h2>
                    </header>
                    <p>
                        <br />
                        <br />
                    </p>
                    <br />
                </>
            )}            
        </article>
    );
}

export default Game;