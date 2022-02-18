import styled from 'styled-components'

export const Layout = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
`

export const BoxUpload = styled.div`
    display: grid;
    margin-top: 1px;
    place-items: center;
    border: 1px dashed #d61d42;
    position: relative;

    height: 240px;
    width: 350px;

    background: #FBFBFF;
    border-radius: 20px;

    .image-upload {
        display: flex;
        flex-wrap:wrap;

        label {
            cursor: pointer;
        
            :hover {
                opacity: .8;
            }
        }

        >input {
            display: none;
        }
    }
`

export const ImagePreview = styled.div`
    position: relative;
    // cursor: pointer;

    #uploaded-image{
        height: 237px;
        width: 347px;
        object-fit: cover;
        border-radius: 20px;
    }

    .close-icon{
        background: #000;
        border-radius: 5px;
        opacity: .8;

        position: absolute;
        z-index: 10;
        right: 15px;
        top: 20px;
        cursor: pointer;

        :hover {
            opacity: 1;
        }   
    }
`