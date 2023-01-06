import html from './images/html5-original.svg';
import css from './images/css3-original.svg';
import scss from './images/sass-original.svg';
import tailwind from './images/tailwindcss-original-wordmark.svg';
import javascript from './images/javascript-original.svg';
import firebase from './images/firebase-plain.svg';
import figma from './images/figma-original.svg';
import git from './images/git-original-wordmark.svg';
import './overviewpage.css'

export default function OverviewPage({overviewData}){
    // map through an array 
    // const overview = overviewData.map((item) => {
    //     return(
    //         <>
    //             <img src={item.avater_url} alt="myImage" />
    //             <aside>
    //                 <h3>{item.name}</h3>
    //                 <h4>{item.login}</h4>
    //             </aside>
    //         </>
    //     )
    // })
    return(
        <section className='overview'>
            {/* THis is the overview section  */}
            {/* {console.log(overviewData)} */}
            <section>
                <section className='first'>
                    
                    {/* this is the introductory part  */}
                    

                    <aside>
                        <img src='https://avatars.githubusercontent.com/u/47712998?v=4' alt="myImage" />
                        <div>
                           <h3>Chukwuanieze Eric</h3>
                            <h4>Ericchuk</h4> 
                        </div>
                        
                    </aside>
                    
                    <section>
                    <p>A software developer, code in javascript, uses react framework</p>
                    <section>
                    <div>
                        <img alt="followers" />
                        <b>6</b>
                        <p>followers</p>
                    </div>
                    <div>
                        <img alt="following" />
                        <b>14</b>
                        <p>following</p>
                    </div>
                </section>
                </section>
                </section>


                
                
                

                {/* overview dashboard */}

                <section className='second'>
                    <aside>
                        <aside>
                            <p>Ericchuk /<b>README</b>.md</p>
                            <img alt="pen" />
                        </aside>
                        <hr />

                        <div>
                            <h2>Hello there; welcome 👋🏾</h2>
                            <hr />
                        </div>
                    </aside>

                    <ul>
                        <a><li className='purple'><img alt="eng" /> ENGINEERING</li></a>
                        <a><li className='black'><img alt="pe" />CHUKWUANIEZEERIC.COM</li></a>
                        <a><li className='darkblue'><img alt="li" />IAMCHUKWUANIEZEERIC</li></a>
                        <a><li className='blue'><img alt="tw" />CHUKSBRAVEN</li></a>
                    </ul>
                    <article>
                        {/* my description  */}
                        <p>
                        I'm a Software Engineer. I'm passionate about sharing knowledge, documentation, web engineering, and others. I create web pages that keeps the user glued to their phone.... 
                        </p>

                        <b>Here's a quick summary about me:</b>
                        
                        <ol>
                            <li>😊 Pronouns: He/him</li>
                            <li>💡 Fun fact: I'm currently studying at Altschool Africa <a>School of Software Engineering </a>Class of 2022</li>
                            <li>🌱 I'm currently learning Vuejs</li>
                            <li>😊 I’m looking for help with open source projects, hackathons, internships, and entry-level opportunities.</li>
                            <li>💼 Job interests: Software Engineer, Front Engineer, or UI Engineer (Intern or Junior level).</li>
                            <li>📫 You can view my resume and contact me by emailing <a href="mailto:chukwuaniezeeric@gmail.com"> mailtochukwuaniezeeric@gmail.com</a></li>
                        </ol>

                        <hr />

                        <b>🛠️ Languages and Tools :</b>
                        <ul className='tools'>
                            <li><img src={html} alt=""/> </li>
                            <li><img src={css} alt=""/> </li>
                            <li><img src={scss} alt=""/></li>
                            <li><img src={tailwind} alt=""/> </li>
                            <li><img src={javascript} alt=""/> </li>
                            <li><img src={firebase} alt=""/> </li>
                            <li><img src={figma} alt=""/></li>
                            <li><img src={git} alt=""/></li>
                        </ul>

                        <section className='languages'>
                            <b>Most Used Language</b>
                            {/* <progress value="100" max="100"></progress> */}
                            <div className="bar">
                                <div className="darkpurple"></div>
                                <div className="yellow"></div>
                                <div className="lightred"></div>
                                <div className="lightpurple"></div>
                            </div>
                            <div className="langs">
                                <li>CSS  <small>39.12%</small></li>
                                <li>HTML <small>24.12%</small></li>
                                <li>JavaScript <small>29.74%</small></li>
                                <li>SCSS <small>6.34%</small></li>
                            </div>
                        </section>
                    </article>

                </section>
            </section>
        </section>
    )
}