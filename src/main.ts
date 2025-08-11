import { InitialApplication } from './application/InitialApplication';

(async (): Promise<void> => {
 await runApplication();
})();

async function runApplication(): Promise<void> {
 const initialApplication: InitialApplication = InitialApplication.new();
 await initialApplication.run();
}