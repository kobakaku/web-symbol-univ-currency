import { exportFunctionsModule } from '../../utils/firebase/deploy';

const domains: string[] = ['schedule'];

domains.forEach((domain) => exportFunctionsModule(['v1', 'pubsub', domain], exports));
