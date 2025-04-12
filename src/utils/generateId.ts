
export const  generateId = <T extends Record<string, any>>(array: T[], key: keyof T): number => {
  return array.length > 0
    ? Math.max(...array.map(item => item[key])) + 1
    : 0
}