import { Collection } from "@discordjs/collection";

export function isObject(value: any): boolean {
    return typeof value === "object" && value !== null;
}

export function flatten(obj: any, props: { [x: string]: boolean | string } = {}): Object {
    if (!isObject(obj)) return obj;
    const output: any = {};
  
    // obj = <Object>obj;
    const objProps = Object.fromEntries(Object.keys(obj)
        .filter(key => !key.startsWith('_'))
        .map(key => [key, true]));
  
    props = Object.assign(Object.keys(objProps).length ? objProps : {}, props);
  
    for (let [prop, newProp] of Object.entries(props)) {
        if (!newProp) continue;
        newProp = newProp === true ? prop : newProp;
    
        const element = obj[prop];
        const elemIsObj = isObject(element);
        const valueOf = elemIsObj && typeof element.valueOf === 'function' ? element.valueOf() : null;
        const hasToJSON = elemIsObj && typeof element.toJSON === 'function';
    
        // If it's a Collection, make the array of keys
        if (element instanceof Collection) output[newProp] = Array.from(element.keys());

        // If the valueOf is a Collection, use its array of keys
        else if (valueOf instanceof Collection) output[newProp] = Array.from(valueOf.keys());

        // If it's an array, call toJSON function on each element if present, otherwise flatten each element
        else if (Array.isArray(element)) output[newProp] = element.map(elm => elm.toJSON?.() ?? flatten(elm));

        // If it's an object with a primitive `valueOf`, use that value
        else if (typeof valueOf !== 'object') output[newProp] = valueOf;

        // If it's an object with a toJSON function, use the return value of it
        else if (hasToJSON) output[newProp] = element.toJSON();

        // If element is an object, use the flattened version of it
        else if (typeof element === 'object') output[newProp] = flatten(element);

        // If it's a primitive
        else if (!elemIsObj) output[newProp] = element;
    }
  
    return output;
}