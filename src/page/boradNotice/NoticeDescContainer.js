import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../components/molecules/layout/layoutHeader/Header'

const NoticeDescContainer = ({}) => {



    return(
        <div id="cpWrap" className="wrap_cp wrap_notice">
        <Header/>
        
        <main id="cpContent" className="section_notice">
            <div className="tit_unit">
                <span className="theme_info">
                    <span className="txt_tit">신 통합회원 전환 시행 안내 (유예기간) 통합회원 정책 업데이트와 더불어 기존 일반 회원을 신통합회원 업데이트와 더불어 기존 일반 회원을 신통합회원 업데이트와 더불어 기존 일반 회원을 신통합회원</span>
                    <span className="txt_date">2020.12.31</span>
                </span>
            </div>
            <div className="cont_unit">
                <span className="theme_info">
                    <span className="view_cont">‘주식회사 일본’의 부활, 그리고 한국 기업의 위기<br/><br/>
                        2010년대 초반까지만 해도 ‘잃어버린 20년’을 넘어 ‘잃어버린 30년’ 간다는 절망적인 말들이 일본 내에서 쏟아졌다. 하지만 불과 5년 만에 상황이 급변했다. 일본 상장기업의 2018년 3월 결산을 보면 ‘역사적’이라는 말이 나온다. 상장기업 평균 연결 순이익은 2년 연속 역대 최고이고, 연결 순이익을 포함해 매출액과 자기자본이익률(ROE)까지, 기업의 주요 3개 지표가 모두 역대 최고다. 특히 ROE는 10.4%로, 1980년대 이후 몇 차례 도전했지만 한 번도 넘지 못했던 마의 10% 벽을 처음으로 돌파했다. 반면, 한국 경제는 위기로 가고 있다. 국내외 정세도 불안하다. 이럴 때 기업은 어떻게 살아남고 또 성장할 수 있을까에 대한 답을 찾아보는 것에서 이 책은 시작됐다. 즉, 《일본 초격차 기업의 3가지 원칙》은 일본이 오랜 침체를 뚫고 부활한 이유를 기업에서 찾았다. 그 기업이란, 경제적 불황이나 정치적인 위기 요소에도 불구하고 끝까지 살아남고 성장한 기업들을 말한다. 그 중에서도 동종업계 경쟁사들이 따라올 수 없을 만큼의 큰 격차를 벌여나간 이른바 ‘초격차 기업’들을 집중적으로 살펴봤다.<br/><br/>
                        왜 일본의 초격차 기업인가?<br/><br/>
                        그들은 우리와 비슷한 제조업종에 집중돼 있고, 서양에 비해 우리나라가 적용하기 더 쉽고 적절한 사례가 많기 때문이다. 또, 한국경제가 일정한 시차를 두고 일본을 따라가는 현상을 보이는 바, 일본 기업들이 대내적인 위기를 지나온 과정이 우리 기업들에도 많은 시사점을 제공한다고 믿기 때문이다.
                        일본이 정치적으로 마음에 들지 않는다고 그 나라의 경제까지 무시한들 한국에 득 될 게 없다. 그보다는 일본 기업들이 어떻게 ‘잃어버린 20년’을 이겨내고 사상 최대 실적을 거뒀는지, 왜 실제로 경쟁력이 점점 높아지고 있는지, 근본적인 이유를 들여다볼 필요가 있다.</span>
                </span>
            </div>
        </main>
    </div>
    );

}

export default NoticeDescContainer;