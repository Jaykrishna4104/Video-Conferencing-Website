import React from "react";
import { useParams} from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () =>{
    const { roomId } = useParams();

    const myMeeting = async (element) => {
        const appID = 845774200;
        const serverSecret = "ceeb25eabcca3889f7aeab46606fa53e";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomId,
        Date.now().toString(),
        "jayakrishna"
        );
        const zc =ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'copy Link',
                    url: `http://localhost:3000/room/${roomId}`,
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton: true,
        });
    };

    return <div>
        <div ref={myMeeting} />
    </div>
};

export default RoomPage;