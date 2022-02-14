import './css/Home.css';

function Home(){
    return (
        document.title='Home',
        <div className='home-pp'>
            <div className='banner'>
                <h1 className='banner-text'>Masks are required for Library visitors due to Covid</h1>
            </div>
            <div className='home-container'>
                <header class="header">
                    <img className='logo-img'src={require('./images/library-logo.png').default}/>
                <div className='logo'>
                    <h1 className='home-head'>Gowtham Library<br></br><span className='address'>No:5,Netaji road,Pattukottai,<br></br>Thanjavur-628501</span></h1>
                    
                </div>
            
                    <input class="menu-btn" type="checkbox" id="menu-btn" />
                    <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
                    <ul class="menu">
                        <li ><a href=""><i className="fas fa-heart"><span className='button-text'>Donate</span></i></a></li>
                        <li><a href=""><i className="fas fa-envelope"><span className='button-text'>Notifications</span></i></a></li>
                        <li><a href=""><i className="fas fa-user"><span className='button-text'>Profile</span></i></a></li>
                        <li><a href=""><i className="far fa-id-card"><span className='button-text'>Library-card</span></i></a></li>
                        <li><a href=""><i className="fas fa-sign-out-alt"><span className='button-text'>Logout</span></i></a></li>
                    </ul>
                    </header>
            </div>
            <div className='space'>

            </div>
           <div className='library-details'>
               <h1 className='days'>Opens from Monday to Friday</h1>
               <h1 className='timing'>8 A.M - 8.PM</h1>
                <h1>A Library for</h1>
           </div>
        </div>
        
    );
};

export default Home;