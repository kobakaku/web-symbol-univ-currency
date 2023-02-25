import { exportFunctionsModule } from './utils/firebase/deploy';

const domains: string[] = ['v1'];

domains.forEach((d) => exportFunctionsModule([d], exports));
