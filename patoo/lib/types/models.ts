export interface Model {
  id: string
  name: string
  provider: string
  providerId: string
}

export const models: Model[] = [
 {
  id: 'gemini-1.5-pro-002',
  name: 'PATOOWORLD AI',
  provider: '',
  providerId: 'google'
  },
  {
    id: 'gemini-2.0-flash-exp',
    name: '99PACE AG',
    provider: 'Google Generative AI',
    providerId: 'google'
    }
  ]
