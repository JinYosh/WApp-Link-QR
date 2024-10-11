import React, { useState } from "react";
import { WA_URL, QR_CODE_API } from '../constants';

const FormBox = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const showResult = document.getElementById("showResult");

    const goToChat = () => {
        console.log("Go to chat");
        removeChildNodes();
        if (phoneNumber.length >= 10) {
            let chatLink = genTempLink();
            window.open(chatLink, '_blank', "noopener,noreferrer")
        }
        else {
            let newEle = document.createElement('p');
            newEle.innerText = '-- Incorrect phone number --';
            newEle.setAttribute('style', "color: red;");
            showResult.appendChild(newEle);
        }
    }
    const genQRCode = () => {
        console.log("Gen QR code");
        removeChildNodes();
        if (phoneNumber.length >= 10) {
            let link = genTempLink();
            let qrCodeLink = QR_CODE_API + link;
            generateImage(showResult, qrCodeLink);
        }
        else {
            let newEle = document.createElement('p');
            newEle.innerText = '-- Incorrect phone number --';
            newEle.setAttribute('style', "color: red;");
            showResult.appendChild(newEle);
        }
    }

    const genTempLink = () => {
        return WA_URL + phoneNumber
    }

    const generateImage = (node, link) => {
        let newEle = document.createElement('img');
        newEle.setAttribute('src', link);
        newEle.setAttribute('alt', 'qr-Code-Image');
        node.appendChild(newEle);
    }

    const removeChildNodes = () => {
        console.log("removing");
        if (showResult) {
            let ele = showResult.lastElementChild;
            while (ele) {
                showResult.removeChild(ele);
                ele = showResult.lastElementChild;
            }
        }
    }

    return (
        <div className="m_container">
            <div className="m_teal-green m_banner h-10 w-full"></div>
            <div className="m_form-box flex justify-center h-[80vh] rounded-md shadow-lg bg-gray-100">
                <div className="form-div pt-20">
                    <div className="input-div flex space-x-3 justify-between pt-3">
                        <input className="shadow-md h-10 w-full pl-2 pr-2 rounded-md " maxLength="12" value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} onFocus={() => removeChildNodes()} placeholder="Enter your number" />
                    </div>
                    <div className="button-div flex space-x-3 justify-between pt-3">
                        <button className="rounded-md m_teal-green text-white" onClick={() => goToChat()}>Go for chat</button>
                        <button className="rounded-md m_teal-green text-white" onClick={() => genQRCode()}>Generate QR code</button>
                    </div>
                    <div id="showResult" className="flex space-x-2 justify-center pt-5"></div>
                </div>
            </div>
        </div>
    );
}

export default FormBox;