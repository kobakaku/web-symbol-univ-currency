import { exportFunctionsModule } from '../../utils/firebase/deploy';

const domains: string[] = ['user'];

domains.forEach((domain) => exportFunctionsModule(['v1', 'firestore', domain], exports));
