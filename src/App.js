import './App.css';

function App() {
    return (
        <div className="container">
            <div className="newsletter-Card">
                <text className="header">Level Up Your Frontend Skills</text>
                <text className="text">Sign up for our free newsletter to receive weekly coding challenges that
                    will help you improve your frontend development skills.
                </text>
                <div className="email-container">
                    <div>
                        <input type="email" placeholder="Enter your email address" className="input-box" />
                    </div>
                    <button className="button" style={{ color: 'white' }} onClick={() => alert("Thank you for subscribe!")}>SUBSCRIBE</button>
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="box" />
                    <label htmlFor="checkbox" style={{ fontSize:'2vh' }}>
                        By checking this box, you agree to receive our weekly newsletter containing coding challenges, tips, and other related content. You may unsubscribe from the newsletter at any time.
                    </label>
                </div>

                {/*final*/}
            </div>
        </div>

    );
}

export default App;
