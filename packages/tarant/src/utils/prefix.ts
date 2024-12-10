const COMPONENT_PREFIX = '\u0074\u0061\u0072\u0061\u006e\u0074-';

export function prefixClassname(component: string) {
  return `${COMPONENT_PREFIX}${component}`;
}
