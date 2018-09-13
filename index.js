const clova = require('@line/clova-cek-sdk-nodejs');

const clovaSkillHandler = clova.Client
    .configureSkill()

    //起動時に喋る
    .onLaunchRequest(responseHelper => {
        responseHelper.setSimpleSpeech({
            lang: 'ja',
            type: 'PlainText',
            value: 'ハローワールド',
        });
    })

    //HelloIntent
    .onIntentRequest(async responseHelper => {
        const intent = responseHelper.getIntentName();
        const sessionId = responseHelper.getSessionId();
    
        console.log('Intent:' + intent);
        if(intent === 'HelloIntent'){
            speech.value = `こんにちわ、温泉ババアのスマスピ本のサンプルですだよ`;
            responseHelper.setSimpleSpeech(speech);
            responseHelper.setSimpleSpeech(speech, true);
        }
    })
    
    //終了時
    .onSessionEndedRequest(responseHelper => {
        const sessionId = responseHelper.getSessionId();
    })
    .handle();


const app = new express();
const port = process.env.PORT || 3000;



