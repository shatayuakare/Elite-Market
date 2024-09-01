import React from 'react'
import First from './First'
import Content from '../../components/Content'

const Home = () => {
    return (
        <main>
            <First />
            <Content className={'bg-red-50'} page={'Products'} path={"/products"} heading="Top Selling Products">
                <div className="grid">
                    <div className="card">
                        <img className='h-60 w-48' src="" alt="" />
                        <div className="card-title">
                            Helo
                        </div>
                    </div>
                </div>
            </Content>
        </main>
    )
}

export default Home