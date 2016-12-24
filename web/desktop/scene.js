const THREE = require('three');
const TransformControls = require('three-transformcontrols');
const OrbitControls = require('three-orbit-controls')(THREE);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
camera.position.z = 1000;
camera.position.y = 400;
camera.lookAt(new THREE.Vector3(0, 0, 0));

const orbit = new OrbitControls(camera);

const geometry = new THREE.BoxGeometry( 264, 544, 28 );
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
});

const mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

// Debugging
var planeGeo =  new THREE.PlaneGeometry(5000, 5000, 10, 10);
var blueMaterial = new THREE.MeshBasicMaterial({
    color: 0x0000ff,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide,
    wireframe: true
});
var plane = new THREE.Mesh( planeGeo, blueMaterial );
plane.rotation.x = Math.PI / 2;
scene.add(plane);

const control = new TransformControls( camera, renderer.domElement );
control.attach( mesh );
//control.addEventListener('change', animate);
scene.add( control );

control.setMode( 'rotate' );
control.setSpace( 'local' );
// let [x, y, z] = [0, 0, 0];
// const meshX = new THREE.Vector3(1, 0, 0);
// scene.add(new THREE.AxisHelper( 200 ));
// mesh.rotation.z = Math.PI / 2;
// const arrowHelper = new THREE.ArrowHelper(meshX, new THREE.Vector3(), 300, 0xffffff);
// scene.add(arrowHelper);


function start() {
    document.body.appendChild( renderer.domElement );


    mesh.rotation.set(-Math.PI/2, 0, 0);
}

function animate() {

    requestAnimationFrame( animate );
    //mesh.rotation.z += 0.005;
    //mesh.rotateZ(0.005);


    control.update();
    renderer.render( scene, camera );
}

module.exports = {
    start: start,
    animate: animate,
    mesh: mesh
};