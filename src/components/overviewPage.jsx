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
        <section>
            {/* THis is the overview section  */}
            {/* {console.log(overviewData)} */}
            <section>
                <section>
                    {/* this is the introductory part  */}
                    <img alt="myImage" />

                    <aside>
                        <h3>Chukwuanieze Eric</h3>
                        <h4>Ericchuk</h4>
                    </aside>
                </section>


                <section>
                    <div>
                        set status
                    </div>
                    <p>A software developer, code in javascript, uses react framework</p>
                </section>
                
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

                {/* overview dashboard */}

                <section>
                    <header>
                        <aside>
                            <p>Ericchuk / README.md</p>
                            <img alt="pen" />
                        </aside>
                        <hr />

                        <div>
                            <h2>Hello there; welcome</h2>
                            <hr />
                        </div>
                    </header>

                    <ul>
                        <a><li><img alt="eng" /> ENGINEERING</li></a>
                        <a><li><img alt="personalweb" />CHUKWUANIEZEERIC.COM</li></a>
                        <a><li><img alt="linkedIn" />IAMCHUKWUANIEZEERIC</li></a>
                        <a><li><img alt="twitter" />CHUKSBRAVEN</li></a>
                    </ul>
                    <article>
                        {/* my description  */}
                        <p>
                        I'm a Software Engineer. I'm passionate about sharing knowledge, documentation, web engineering, and others. I create web pages that keeps the user glued to their phone.... 
                        </p>

                        <b>Here's a quick summary about me:</b>
                        
                        <ul>
                            <li>😊 Pronouns: He/him</li>
                            <li>💡 Fun fact: I'm currently studying at Altschool Africa <a>School of Software Engineering </a>Class of 2022</li>
                            <li>🌱 I'm currently learning Vuejs</li>
                            <li>😊 I’m looking for help with open source projects, hackathons, internships, and entry-level opportunities.</li>
                            <li>💼 Job interests: Software Engineer, Front Engineer, or UI Engineer (Intern or Junior level).</li>
                            <li>📫 You can view my resume and contact me by emailing mailtochukwuaniezeeric@gmail.com.</li>
                        </ul>

                        <hr />

                        <b>🛠️ Languages and Tools :</b>
                        <ul>
                           HTML  CSS3  JavaScript  SCSS  SASS  Tailwind  Firebase  Figma  Git 
                        </ul>
                    </article>
                </section>
            </section>
        </section>
    )
}