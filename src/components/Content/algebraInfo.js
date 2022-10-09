import React from "react";

function Algebrainfo() {
    return (
        <div>
            <h1 style={{padding: "40px"}} className="home">Some Extra Information</h1>
            <div className="cards-container">
                <div className="card">
                    <h1 className="card-title">History of algebra</h1>
                    <p>
                    Algebra can essentially be considered as doing computations similar to those of arithmetic but with non-numerical mathematical objects. 
                    However, until the 19th century, algebra consisted essentially of the theory of equations. For example, the fundamental theorem of 
                    algebra belongs to the theory of equations and is not, nowadays, considered as belonging to algebra 
                    (in fact, every proof must use the completeness of the real numbers, which is not an algebraic property).
                    </p>
                </div>
                <div className="card">
                    <h1 className="card-title">Word Origin</h1>
                    <p>
                    The word "algebra" is derived from the Arabic word الجبر al-jabr, and this comes from the treatise written in the year 
                    830 by the medieval Persian mathematician, Muhammad ibn Mūsā al-Khwārizmī, whose Arabic title, Kitāb al-muḫtaṣar fī 
                    ḥisāb al-ğabr wa-l-muqābala, can be translated as The Compendious Book on Calculation by Completion and Balancing. 
                    The treatise provided for the systematic solution of linear and quadratic equations. According to one history, 
                    "it is not certain just what the terms al-jabr and muqabalah mean, but the usual interpretation is similar to that 
                    implied in the previous translation. The word 'al-jabr' presumably meant something like 'restoration' or 'completion' 
                    and seems to refer to the transposition of subtracted terms to the other side of an equation; the word 'muqabalah' is 
                    said to refer to 'reduction' or 'balancing'—that is, the cancellation of like terms on opposite sides of the equation. 
                    Arabic influence in Spain long after the time of al-Khwarizmi is found in Don Quixote, where the word 'algebrista' is 
                    used for a bone-setter, that is, a 'restorer'."
                    </p>
                </div>
                <div className="card">
                    <h1 className="card-title">Links for Text/detailed Info</h1>
                    <ul className="card-ul">
                        <li><a href="https://www.bing.com/ck/a?!&&p=8b569b6526800566JmltdHM9MTY2NTEwMDgwMCZpZ3VpZD0yZTRmZTg3Mi0wMGY3LTYxNzEtMWRkZS1mOTVjMDE0NTYwMjYmaW5zaWQ9NTE5Mg&ptn=3&hsh=3&fclid=2e4fe872-00f7-6171-1dde-f95c01456026&psq=algebra+history&u=a1aHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSGlzdG9yeV9vZl9hbGdlYnJh&ntb=1">Extra Info</a></li>
                        <li><a href="https://ktbs.kar.nic.in/New/website%20textbooks/class10/10th%20standard/10th-english-maths-2.pdf">Standard Referance Text</a></li>
                        <li><a href="https://ktbs.kar.nic.in/New/website textbooks/class10/10th standard/10th-english-maths-1.pdf">Referance Text</a></li>
                    </ul>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Algebrainfo;