const express = require('express');
const router = express.Router();

const childController = require('../../controllers/childController')
const ROLES_LIST = require('../../config/roles_list')

const verifyRoles = require('../../middleware/verifyRoles')

router.route('/orphanage/:orphanageid').get(verifyRoles(ROLES_LIST.Head, ROLES_LIST.Staff), childController.getOrphanageChildren)
router.route('/:childid')
    .get(verifyRoles(ROLES_LIST.Head, ROLES_LIST.Staff), childController.getChild)
    .put(verifyRoles(ROLES_LIST.Head, ROLES_LIST.Staff), childController.updateChild)
router.route('/').post(verifyRoles(ROLES_LIST.Head, ROLES_LIST.Staff), childController.addChild)

module.exports = router