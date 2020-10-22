var camera, scene, renderer;
var geometry, material, mesh;
 
init();
animate();
 
function init() {
 
    camera = new THREE.PerspectiveCamera( 70, 640 / 480, 0.01, 10 );
    camera.position.z = 1;
 
    scene = new THREE.Scene();
 
    geometry = new THREE.BoxGeometry( 0.2, 0.2, 0.2 );
    material = new THREE.MeshNormalMaterial();
 
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
    
    threeCanvas = document.getElementById("three-canvas");

    renderer = new THREE.WebGLRenderer( { antialias: true, canvas: threeCanvas } );
    
 
}
 
function animate() {
 
    requestAnimationFrame( animate );
 
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.02;
 
    renderer.render( scene, camera );
 
}

function loadMarioLand(){
    downloadROM('supermarioland.gb');
}

   