import config from '../../../config';

const crashReport = store => next => action => {
  try {
    return next(action);
  }
  catch (err) {
    if (config.useReactotron) {
      console.tron.log('/!\ CRASH REPORT /!\ => ');
      console.tron.log(err);  
    }
    console.error('/!\ CRASH REPORT /!\ => ');
    console.error(err);
    throw err;
  }
};
export default crashReport;