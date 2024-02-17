import { useRef } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'
import p4 from '../../assets/p4.jpg'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';



function ProductD() {

    let imgRef = useRef(null)

    const BootstrapButton = styled(Button)({
        fontSize: 14,
        lineHeight: 1.5,
        backgroundColor: '#088178',
        paddingTop: 10,
        paddingBottom: 10,
        color: 'white',
        fontWeight: 'bolder',
        '&:hover': {
            backgroundColor: '#088178',
        },
    });


    function toChangeSrc(e) {
        imgRef.current.src = e.currentTarget.getAttribute('src')
    }


    return (
        <>
            <Header></Header>
            <main className='w-full px-20 py-20 flex mb-28 tablet:px-10 mobile:px-0 mobile:py-10'>
                <div id='product-image-section' className='w-2/5 px-10 mobile:pl-5 mobile:mr-5'>
                    <img ref={imgRef} src={p1} alt="f1" width='100%' className='min-w-[21rem]' />
                    <div id='product-image-group' className='w-full flex justify-between mt-[1.3%] mobile:mt-1 mobile:w-[21rem]'>
                        <img id='smallimg1' onClick={toChangeSrc} className='cursor-pointer w-[24%] min-w-[5rem]' src={p1} alt="f2" />
                        <img id='smallimg2' onClick={toChangeSrc} className='cursor-pointer w-[24%] min-w-[5rem]' src={p2} alt="f2" />
                        <img id='smallimg3' onClick={toChangeSrc} className='cursor-pointer w-[24%] min-w-[5rem]' src={p3} alt="f3" />
                        <img id='smallimg4' onClick={toChangeSrc} className='cursor-pointer w-[24%] min-w-[5rem]' src={p4} alt="f4" />
                    </div>
                </div>
                <div id='product-details-section' className='w-3/5 px-10 pt-8 mobile:pr-0 mobile:ml-5'>
                    <h6 className='text-2xl font-semibold mb-14'>Home / T-Shirts</h6>
                    <h4 className='text-4xl font-extrabold mb-14'>Men's Fashion T Shirts</h4>
                    <h2 className='text-5xl font-extrabold mb-9'>$139.00</h2>
                    <select className='mb-5 font-serif text-[1.6rem] text-gray-500 outline-none px-2.5 py-0.5 border-2 border-gray-400 block'>
                        <option className='text-2xl text-gray-600' disabled selected>Select Size</option>
                        <option className='text-2xl text-gray-600' value="xl">XL</option>
                        <option className='text-2xl text-gray-600' value="xxl">XXL</option>
                        <option className='text-2xl text-gray-600' value="small">Small</option>
                        <option className='text-2xl text-gray-600' value="large">Large</option>
                    </select>
                    <div className='flex items-center'>
                        <input min='1' max='5' defaultValue='1' type="number" className='w-20 mr-6 border-2 border-gray-400 py-3 px-2 text-gray-600 text-3xl outline-none rounded' />
                        <BootstrapButton size='large' variant='contained'>Add To Cart</BootstrapButton>
                    </div>
                    <h2 className='text-4xl font-bold mt-16 mb-5'>Product Details</h2>
                    <p className='text-3xl text-gray-600 font-sans pr-40 tablet:pr-16 mobile:pr-8'>Blue textured self design opaque formal shirt a cutaway collar Button placket 1 patch pocket Long regular sleeves Curved hem Slim Fit Size worn by the model: 40 Chest: 39" Height: 6'1" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iusto atque non expedita ea quos incidunt delectus explicabo quam culpa iste vitae impedit assumenda, sit mollitia. Aperiam, ratione ullam eveniet qui fugiat exercitationem enim reiciendis corporis accusamus distinctio sed dolores pariatur veritatis nihil quae omnis ea, quas expedita non ab.</p>
                </div>
            </main>
            <Footer></Footer>
        </>
    )
}

export default ProductD