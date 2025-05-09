import PageBanner from '../../../components/client/PageBanner'
import dichvu from '../../../assets/images/dichvu.png'

const Booking = () =>{
    return (
        <div>
            <PageBanner
            title="Đặt lịch"
            backgroundImage={dichvu}
            breadcrumbs={[
                {label: 'Trang chủ', href: '/'},
                {label: 'Đặt lịch', active: true}
            ]}

            />
        </div>
    )
}

export default Booking