// Dimensions & coordinates
const seedPlantZ = 0;
const originalSeedPosition = [-0.01, 0.35, 0.70];

// Function to create a seed object
function createSeed(name, position) {
    SimObj.make_object3d({
        name: name,
        parent: "user_origin",
        geometry: "Sphere",
        scale: [0.03, 0.03, 0.04],
        position: position,
        orientation: [0, 0, 0],
        material: "MeshStandard",
        color: [0, 114, 0],
        wireframe: false
    });
}

// Create initial seed object
createSeed("seed", originalSeedPosition);

// Planting coordinates and orientations
const plantingCoordinates = [
    { position: [-0.14100697787585317, 0.6153030098105706, 0.029999999999999888], orientation: [0.0400878152126742, -0.16895755880848218, -0.9848077530122074], j7: -0.08460446945231581 },
    { position: [-0.0005096810856150939, 0.6300535880487957, 0.04000000000000006], orientation: [-0.00618244887936795, -0.2755680120181607, -0.9612616959383188], j7: 1.3315812899545563 },
    { position: [0.15951394529051172, 0.6338282139780307, 0.028884057090900847], orientation: [-0.02506890270997949, -0.17268654205792572, -0.9846577620214009], j7: -14 },
    { position: [-0.15628482252850023, 0.4809952254063209, 0.05147192961711042], orientation: [0.09034782543369999, -0.27806201495688126, -0.9563047559630354], j7: -2 },
    { position: [0.001389428344120046, 0.4841716262648862, 0.02999999999999997], orientation: [0.01685381300485257, 0.03518720462108806, -0.9992386149554826], j7: -2.024907152898294 },
    { position: [0.17004667082241925, 0.4743568252441657, 0.04000000000000001], orientation: [-0.005868669649398737, -0.01643609463948967, -0.9998476951563913], j7: 0.2792915192109007 },
    { position: [-0.13614676461494302, 0.33827085393867135, 0.03999999999999994], orientation: [0.010850024587211755, -0.01366980090965435, -0.9998476951563909], j7: 8.017274773385836 },
    { position: [0.00006602229424580166, 0.33566309631402114, 0.03999999999999995], orientation: [0.0008008526715890546, -0.01743402206751371, -0.9998476951563913], j7: 5.3586290731487765 },
    { position: [0.17004667082241917, 0.3188300008950291, 0.03999999999999988], orientation: [0.0008008526716121837, -0.017434022067535252, -0.9998476951563907], j7: -22.703148384015314 },
];

// Function to move to a seed position and create a duplicate seed
function moveToSeedAndCreateDuplicate(index) {
    const { position, orientation, j7 } = plantingCoordinates[index];
    return [
    	out("Planting seeds..."),
        Dexter.dexter0.move_to(position, orientation, undefined, undefined, j7, 55),
        Dexter.wait_until(4),
        Dexter.dexter0.move_to(position, orientation, undefined, undefined, j7, 200),
        Dexter.wait_until(2),
        () => createSeed("seed_duplicate_" + index, originalSeedPosition),
        Dexter.dexter0.move_to([0, 0.33995507859951424, 0.7352761549171786], [0, 0.6156614753256584, -0.7880107536067219], undefined, undefined, 0, 200),
        Dexter.wait_until(4),
        Dexter.dexter0.move_to([0, 0.33995507859951424, 0.7352761549171786], [0, 0.6156614753256584, -0.7880107536067219], undefined, undefined, 0, 55),
        Dexter.wait_until(3)
    ];
}

// Function to delete all seed objects
function deleteAllSeeds() {
    return {
        start: function() {
            out("Deleting all seed objects...");
            for (let i = 0; i < plantingCoordinates.length; i++) {
                SimObj.remove(SimObj[`seed_duplicate_${i}`]);
            }
            SimObj.remove(SimObj["seed"]);
        }
    };
}

// Hose object
SimObj.make_object3d({
    name: "hose",
    parent: "user_origin",
    geometry: "Cylinder",
    scale: [0.02, 0.02, 0.29],
    position: [-0.27, 0.24, 0],
    orientation: [-90, 0, 0],
    material: "MeshStandard",
    color: [0.1953125, 0.18359375, 0.9921875],
    wireframe: false
});

// Watering coordinates and orientations
const wateringCoordinates = [
    { position: [-0.09728020750000001, 0.39466451083333354, 0.2599999999999999], orientation: [-0.09181876604592952, -0.3488006013886806, -0.932688294486801], j7: -4.723850830445755 },
    { position: [-0.024377007499999947, 0.4092451508333334, 0.26], orientation: [-0.09181876604592894, -0.3488006013886852, -0.9326882944867994], j7: -15.161731477278252 },
    { position: [0.07282725916666669, 0.4578472841666667, 0.26000000000000006], orientation: [-0.09181876604592473, -0.3488006013886877, -0.9326882944867989], j7: -27.608579810039814 },
    { position: [0.0631068325000001, 0.3023204575, 0.26], orientation: [-0.09181876604592444, -0.3488006013886973, -0.9326882944867954], j7: -30.361273337520714 },
    { position: [-0.019516794166666657, 0.2926000308333335, 0.26], orientation: [-0.09181876604592557, -0.34880060138869784, -0.932688294486795], j7: -14.75452280897585 },
    { position: [-0.06811892749999997, 0.3071806708333331, 0.25999999999999995], orientation: [-0.09181876604591994, -0.34880060138869917, -0.932688294486795], j7: -6.067262668499922 },
    { position: [-0.053538287499999976, 0.21483661750000013, 0.32999999999999996], orientation: [-0.06275724616536674, -0.5534589907747263, -0.8305086836297144], j7: -5.350609314146254 },
    { position: [-0.014656580833333311, 0.22941725750000003, 0.33000000000000007], orientation: [-0.06275724616536653, -0.5534589907747268, -0.8305086836297141], j7: -15.68851812842982 },
    { position: [0.06310683250000002, 0.23913768416666664, 0.33000000000000007], orientation: [-0.06275724616536761, -0.5534589907747256, -0.8305086836297149], j7: -34.12691832210071 }
];

// Function to move to a watering position
function moveToWateringPosition(position, orientation, j7) {
    return [
        Dexter.dexter0.move_to(position, orientation, undefined, undefined, j7, 55),
        Dexter.wait_until(3)
    ];
}

// Function to move to the hose and perform watering actions
function waterPlants() {
	out("Starting to water plants");
    const hosePosition = [-0.28758851216335185, 0.2920018410084193, 0.028806686288745956];
    const hoseOrientation = [-0.10349174991541607, -0.3519664680098554, -0.9302736495763557];
    const wateringPosition = [-0.008618577862192764, 0.24680377860028174, 0.5953269319980221];
    const wateringOrientation = [0.014749164632036193, -0.42236081411441023, -0.9063077870366499];

    return [
        // Go to hose and grab
        Dexter.dexter0.move_to(hosePosition, hoseOrientation, undefined, undefined, 132, 200),
        Dexter.wait_until(5),
        Dexter.dexter0.move_to(hosePosition, hoseOrientation, undefined, undefined, 132, 55),
        Dexter.wait_until(3),
        
        // Go to watering position
        Dexter.dexter0.move_to(wateringPosition, wateringOrientation, undefined, undefined, 0, 55),
        Dexter.wait_until(3),
        
        // Watering rows
        ...wateringCoordinates.map(({ position, orientation, j7 }) => moveToWateringPosition(position, orientation, j7)).flat(),
        
        // Return hose
        Dexter.dexter0.move_to(hosePosition, hoseOrientation, undefined, undefined, 132, 55),
        Dexter.wait_until(5),
        Dexter.dexter0.move_to(hosePosition, hoseOrientation, undefined, undefined, 132, 200),
        Dexter.wait_until(3)
    ];
}

const stalkPositions = [
    [-0.15, 0.62], [-0.15, 0.47], [-0.15, 0.32],
    [0, 0.62], [0, 0.47], [0, 0.32],
    [0.15, 0.62], [0.15, 0.47], [0.15, 0.32]
];

/* // Function to create and position plant stalks
function createStalks() {
    return stalkPositions.map((position, index) => 
        ({
            start: function() {
                SimObj.make_object3d({
                    name: "plantStalk_" + index,
                    parent: "user_origin",
                    geometry: "Cylinder",
                    scale: [0.03, 0.03, 0.2],
                    position: [...position, 0.09],
                    orientation: [0, 0, 0],
                    material: "MeshStandard",
                    color: [0.1640625, 0.671875, 0.171875],
                    wireframe: false
                });
            }
        })
    );
} */

/*// Ignore this, it is an old, not used function
function createOvergrown() {
    return stalkPositions.map((position, index) => ({
        name: "overgrown_" + index,
        start: function() {
            SimObj.make_object3d({
                name: "overgrown_" + index,
                parent: "user_origin",
                geometry: "Sphere",
                scale: [0.04, 0.04, 0.04],
                position: [...position, 0.23], // Z position set to 0.23
                orientation: [0, 0, 0],
                material: "MeshStandard",
                color: [0.00390625, 0.2734375, 0.0234375],
                wireframe: false
            });
        }
    }));
} */

// Function to move to a position and wait
function moveToPosition(position, orientation, j7, speed) {
    return [
        Dexter.dexter0.move_to(position, orientation, undefined, undefined, j7, speed),
        Dexter.wait_until(3)
    ];
}

// Function to trim overgrown objects
function trimOvergrown() {
    const overgrownPositions = [
        { position: [-0.1327071608699674, 0.6174179725707825, 0.28457896557064544], orientation: [-0.024325937725784386, 0.03050310042618857, -0.9992386149554826], j7: -7 },
        { position: [0.021395811771252018, 0.6126958850751648, 0.29216218932373855], orientation: [-0.007850678579297766, -0.22481402023953226, -0.9743700647852352], j7: -2 },
        { position: [0.16031109916666675, 0.6376751775, 0.2900000000000002], orientation: [-0.007850678579280679, -0.22481402023953362, -0.9743700647852352], j7: -14.14167695573153 },
        { position: [0.1797519525000001, 0.4772881375, 0.2899999999999999], orientation: [-0.007850678579274954, -0.2248140202395376, -0.9743700647852342], j7: -20.666924867163434 },
        { position: [0.01450469916666677, 0.47728813750000015, 0.2900000000000001], orientation: [-0.02497964302322472, -0.22355982260874221, -0.9743700647852335], j7: 2.604874211482791 },
        { position: [-0.1361619141666667, 0.48214835083333335, 0.2899999999999999], orientation: [-0.024979643023222732, -0.22355982260873808, -0.9743700647852345], j7: 20.11558081011216 },
        { position: [-0.1313017008333332, 0.33634195083333346, 0.29000000000000004], orientation: [-0.02453534931755634, -0.2236090192373558, -0.97437006478523], j7: 25.675091206145392 },
        { position: [0.009644485833333381, 0.32662152416666673, 0.29000000000000004], orientation: [-0.02453534931755401, -0.22360901923735516, -0.9743700647852302], j7: 2.6589943658126565 },
        { position: [0.1700315258333334, 0.3071806708333333, 0.2899999999999999], orientation: [-0.024143588752722323, -0.22365165765665718, -0.9743700647852277], j7: -24.609267005082867 }
    ];

    const trashArea = { position: [-0.5175228832779692, 0.24132488374297287, 0.03625784269680345], orientation: [0.5454296418383433, -0.2543380189739578, -0.7986355100472925], j7: 0 };

    return overgrownPositions.flatMap((overgrown, index) => [
        ...moveToPosition(overgrown.position, overgrown.orientation, overgrown.j7, 200),
        ...moveToPosition(overgrown.position, overgrown.orientation, overgrown.j7, 55),
        ...moveToPosition(trashArea.position, trashArea.orientation, trashArea.j7, 55),
        ...moveToPosition(trashArea.position, trashArea.orientation, trashArea.j7, 200)
    ]);
}

// Function to delete overgrown objects
function deleteOvergrown() {
	out("Trashing/deleting overgrown plant material");
    const overgrownNames = stalkPositions.map((_, index) => "overgrown_" + index);
    return overgrownNames.map(name => ({
        start: function() {
            SimObj.remove(SimObj[name]);
        }
    }));
}

const weedPositions = [
    [-0.06, 0.55], [0.08, 0.55], [0.08, 0.4],
    [-0.06, 0.4]
];

/* // Ignore this, it is an old, not used function
function createWeeds() {
    return weedPositions.map((position, index) => ({
        start: function() {
            SimObj.make_object3d({
                name: `weed_${index}`,
                parent: "user_origin",
                geometry: "Cylinder",
                scale: [0.03, 0.03, 0.12],
                position: [...position, 0.06],
                orientation: [0, 0, 0],
                material: "MeshStandard",
                color: [0.99609375, 0, 0],
                wireframe: false
            });
        }
    }));
} */

// Function to move to a weed and then move to the trash area
function moveToWeedAndMoveToTrash(weedIndex, position, orientation, j7) {
    return [
    	out("Scanning for weeds..."),
        out("Weeds found, removing them now..."),
        ...moveToPosition(position, orientation, j7, 200),
        ...moveToPosition(position, orientation, j7, 55),
        ...moveToPosition(trashArea.position, trashArea.orientation, trashArea.j7, 55),
        ...moveToPosition(trashArea.position, trashArea.orientation, trashArea.j7, 200)
    ];
}

// Trash area coordinates
const trashArea = { position: [-0.5175228832779692, 0.24132488374297287, 0.03625784269680345], orientation: [0.5454296418383433, -0.2543380189739578, -0.7986355100472925], j7: 0 };

// Function to delete all weed objects
function deleteAllWeeds() {
    return {
        start: function() {
            out("Throwing away (deleting) all weeds");
            weedPositions.forEach((_, index) => {
                SimObj.remove(SimObj[`weed_${index}`]);
            });
        }
    };
}

// Stalk collection area coordinates
const collectionArea = { position: [-0.3534136978114704, 0.48806053015114365, 0.16493835936679552], orientation: [0.3630113993270028, -0.25047678654634115, -0.8974876619542298], j7: 28 };

// Function to move to a stalk and then move to the collection area
function moveToStalkAndMoveToCollection(stalkIndex, position, orientation, j7) {
    return [
        ...moveToPosition(position, orientation, j7, 200),
        ...moveToPosition(position, orientation, j7, 55),
        ...moveToPosition(collectionArea.position, collectionArea.orientation, collectionArea.j7, 55),
        ...moveToPosition(collectionArea.position, collectionArea.orientation, collectionArea.j7, 200)
    ];
}

// Function to delete all stalk objects
function deleteAllStalks() {
    return {
        start: function() {
            out("Collected/deleted all plant stalks!");
            stalkPositions.forEach((_, index) => {
                SimObj.remove(SimObj[`plantStalk_${index}`]);
            });
        }
    };
}

// Stalk harvesting positions
const stalkHarvestingPositions = [
    { position: [-0.12576865794950529, 0.6470236543373239, 0.16403005757873848], orientation: [0.08957939725303227, -0.4608460478862875, -0.8829475928589268], j7: 0 },
    { position: [0.011090152180652553, 0.6353543929088704, 0.14911540659552297], orientation: [-0.007923226720119993, -0.45392135478748435, -0.8910065241883678], j7: 0 },
    { position: [0.1700315258333332, 0.6328149641666669, 0.14999999999999988], orientation: [-0.007923226720116354, -0.4539213547874857, -0.8910065241883671], j7: -14.03963447386053 },
    { position: [-0.1361619141666664, 0.49672899083333344, 0.13999999999999996], orientation: [0.09769708849355878, -0.8456240237929573, -0.5247621263811725], j7: 16.102983596354377 },
    { position: [0.009644485833333487, 0.48214835083333335, 0.14], orientation: [0.09794947392319776, -0.8455948268964767, -0.5247621263811696], j7: -0.3695944593145981 },
    { position: [0.15059067250000033, 0.48700856416666666, 0.14000000000000012], orientation: [0.09794947392320007, -0.8455948268964792, -0.5247621263811647], j7: -16.40607874661019 },
    { position: [-0.13616191416666662, 0.34120216416666665, 0.14000000000000004], orientation: [0.09795276110511081, -0.8460053028195172, -0.5240994983713894], j7: 22.531843174670172 },
    { position: [-0.004936154166666493, 0.32662152416666657, 0.14000000000000012], orientation: [0.09795276110510806, -0.8460053028195195, -0.5240994983713865], j7: 1.6424521492931916 },
    { position: [0.14087024583333357, 0.3314817375, 0.13999999999999996], orientation: [0.09795276110511146, -0.8460053028195226, -0.5240994983713809], j7: -22.247481803457703 }
];

new Job({
    name: "garden_test",
    do_list: [
        // Move to home position and open J7
        Dexter.dexter0.move_all_joints(0, 1e-12, 1e-12, 0, 0, 0, 200),
        Dexter.wait_until(5),
        
        // Move to position near the seed and keep J7 open
        Dexter.dexter0.move_to([0, 0.33995507859951424, 0.7352761549171786], [0, 0.6156614753256584, -0.7880107536067219], undefined, undefined, 0, 200),
        Dexter.wait_until(5),
        Dexter.dexter0.move_to([0, 0.33995507859951424, 0.7352761549171786], [0, 0.6156614753256584, -0.7880107536067219], undefined, undefined, 0, 55),
        Dexter.wait_until(3),
        
        // Loop through each seed position
        ...Array.from({ length: plantingCoordinates.length }, (_, i) => moveToSeedAndCreateDuplicate(i)).flat(),
        
        // Move to home position and open J7
        Dexter.dexter0.move_all_joints(0, 1e-12, 1e-12, 0, 0, 0, 200),
        Dexter.wait_until(5),
        
        // Perform watering actions
        ...waterPlants(), 
        
        // Grow the stalks after watering
        ...stalkPositions.map((position, index) => ({
            start: function() {
                out(`Stalk ${index + 1} has grown`);
                SimObj.make_object3d({
                    name: "plantStalk_" + index,
                    parent: "user_origin",
                    geometry: "Cylinder",
                    scale: [0.03, 0.03, 0.2],
                    position: [...position, 0.09],
                    orientation: [0, 0, 0],
                    material: "MeshStandard",
                    color: [0.1640625, 0.671875, 0.171875],
                    wireframe: false
                });
            }
        })),

        // Grow the overgrown objects after watering
        ...stalkPositions.map((position, index) => ({
            start: function() {
                out(`Overgrown ${index + 1} spotted`);
                SimObj.make_object3d({
                    name: "overgrown_" + index,
                    parent: "user_origin",
                    geometry: "Sphere",
                    scale: [0.04, 0.04, 0.04],
                    position: [...position, 0.23], // Z position set to 0.23
                    orientation: [0, 0, 0],
                    material: "MeshStandard",
                    color: [0.00390625, 0.2734375, 0.0234375],
                    wireframe: false
                });
            }
        })),
        
        // Move to home position
        Dexter.dexter0.move_all_joints(0, 1e-12, 1e-12, 0, 0, 0, 200),
        Dexter.wait_until(5),
        
        // Trim overgrown objects
        ...trimOvergrown(),
        
        // Delete overgrown objects
        ...deleteOvergrown(),
        
        // Move to home position
        Dexter.dexter0.move_all_joints(0, 1e-12, 1e-12, 0, 0, 0, 200),
        Dexter.wait_until(5),

        // Create the weeds
        ...weedPositions.map((position, index) => ({
            start: function() {
                out(`Weed ${index + 1} spotted`);
                SimObj.make_object3d({
                    name: `weed_${index}`,
                    parent: "user_origin",
                    geometry: "Cylinder",
                    scale: [0.03, 0.03, 0.12],
                    position: [...position, 0.06],
                    orientation: [0, 0, 0],
                    material: "MeshStandard",
                    color: [0.99609375, 0, 0],
                    wireframe: false
                });
            }
        })),

        // Move weeds to trash area
        ...weedPositions.flatMap((position, index) => moveToWeedAndMoveToTrash(index, [...position, 0.06], [-0.135, -0.855, -0.5], 0)),

        // Delete all weeds
        deleteAllWeeds(), 
        
        // Move to home position
        Dexter.dexter0.move_all_joints(0, 1e-12, 1e-12, 0, 0, 0, 200),
        Dexter.wait_until(6), 
        
        // Harvest stalks and move to collection area
        ...stalkHarvestingPositions.flatMap((position, index) => moveToStalkAndMoveToCollection(index, position.position, position.orientation, position.j7)),

        // Delete all stalks
        deleteAllStalks(),
        
        // Delete all seeds
        deleteAllSeeds(),

        // Move to home position
        Dexter.dexter0.move_all_joints(0, 1e-12, 1e-12, 0, 0, 0, 200),
        Dexter.wait_until()
    ]
}).start();
