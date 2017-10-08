function Demo2() {
    const name = 'JXS';
    const func = () =>{
        let result = 'hello';
        if(name) {
            result += name;
        } else {
            result += 'world';
        }
        return result;
    };
    return (
        <li>
            <h3>JavaScript表达式</h3>
            <p>hello {name || 'world'}</p>
            <p className = {name ? 'class-a' : 'class-b'}>
                hello {name && 'world'}    
            </p>
            <p>
                {func()}
            </p>
        </li>
    );
}
export default Demo2;