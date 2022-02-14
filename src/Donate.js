import './css/Donate.css';

function Donate() {
    return(
        document.title='Donate',
        <div className='donate-app'>

            <div className='donate-container'>
                <div className='donate-head'>Donate Funds/Books</div>
                <div className='donate-content'>
                    <h1>Thanks for your interest in showing your love towards our library.Raise your fund today</h1><br></br>

                    <h1>Teddy Gowtham</h1>
                    <h1>9999999999</h1>
                    <h1>gowtham@gmail.com</h1>
                    <h1>UPI-Details</h1>
                    <img  className='upi-img'src={require('./images/qr.png').default}/>
                </div>
                <div className='donate-books'>
                    <h1>If you like to donate books fill below </h1>
                    <input className="bookname" type="text" placeholder='Book name'/><br></br>
                    <input className="bookgenre" type="text" placeholder='Book genre'/><br></br>
                    <input className="bookauthor" type="text" placeholder='Author name'/><br></br>
                    <input className="bookstatus" type="text" placeholder='Type old/new book'/><br></br>
                    <button className='donate-button'>Notify admin</button>
                </div>
            </div>


        </div>
    );
};

export default Donate;