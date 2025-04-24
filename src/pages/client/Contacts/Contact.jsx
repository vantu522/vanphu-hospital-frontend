import React from 'react'
import PageBanner from '../../../components/client/PageBanner'
import dichvu from '../../../assets/images/dichvu.png'
import { href } from 'react-router-dom'
const Contact = () => {
    return (
        <div>
            <PageBanner
            backgroundImage={dichvu}
            title="Liên hệ"
            breadcrumbs={[
                {label:'Trang chủ', href:'/'},
                {label:'Liên hệ', active:true}
            ]}
            />

        </div>
    )
}

export default Contact