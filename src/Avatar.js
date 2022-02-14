import './css/Avatar.css';

function Avatar() {
    return(
        document.title='Avatar',
        <div className='avatar-app'>
            <div className='avatar-container'>
            <h1 className='avatar-head'> Choose your Avatar</h1>
            <div className='avatarlist'>
                <input type="radio" className="radio_item" value="1" name="item" id="radio1"/>
                <label className="label_item" htmlFor="radio1"> <img  className='avatar-img'
                 src={require('./images/1.png').default} /> </label>
                <input type="radio" className="radio_item" value="2" name="item" id="radio2"/>
                <label className="label_item" htmlFor="radio2"> <img className='avatar-img'
                 src={require('./images/2.png').default}/> </label>

                <input type="radio" className="radio_item" value="3" name="item" id="radio3"/>
                <label className="label_item" htmlFor="radio3"> <img className='avatar-img'
                 src={require('./images/3.png').default}/> </label>

                <input type="radio" className="radio_item" value="4" name="item" id="radio4"/>
                <label className="label_item" htmlFor="radio4"> <img className='avatar-img'
                 src={require('./images/4.png').default}/> </label>

                <input type="radio" className="radio_item" value="5" name="item" id="radio5"/>
                <label className="label_item" htmlFor="radio5"> <img className='avatar-img'
                 src={require('./images/5.png').default}/> </label><br></br>

                <input type="radio" className="radio_item" value="6" name="item" id="radio6"/>
                <label className="label_item" htmlFor="radio6"> <img className='avatar-img'
                 src={require('./images/6.png').default}/> </label>

                <input type="radio" className="radio_item" value="7" name="item" id="radio7"/>
                <label className="label_item" htmlFor="radio7"> <img className='avatar-img'
                 src={require('./images/7.png').default}/> </label>

                <input type="radio" className="radio_item" value="8" name="item" id="radio8"/>
                <label className="label_item" htmlFor="radio8"> <img className='avatar-img'
                 src={require('./images/8.png').default}/> </label>      

                 <input type="radio" className="radio_item" value="9" name="item" id="radio9"/>
                 <label className="label_item" htmlFor="radio9"> <img className='avatar-img'
                  src={require('./images/9.png').default}/> </label>

                <input type="radio" className="radio_item" value="10" name="item" id="radio10"/>
                <label className="label_item" htmlFor="radio10"> <img className='avatar-img'
                 src={require('./images/10.png').default}/> </label><br></br>
            </div>
            </div>
            <button className='submit'>Let start explore</button>
        </div>
        
    );
    
};

export default Avatar;