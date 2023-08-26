const list = ['core_auth.entity.common.LOGIN', 'core_auth.entity.user.MAINTAIN_ANY'];

export const createGrantHierarchy = (object, attributes) => {
	if (attributes.length === 2) {
		if (!object[attributes[0]]) {
			object[attributes[0]] = [];
		}

		object[attributes[0]].push(attributes[1]);
		return object;
	}

	if (!object[attributes[0]]) {
		object[attributes[0]] = {};
	}

	object[attributes[0]] = createGrantHierarchy(object[attributes[0]], attributes.slice(1, attributes.length));

	return object;
};

export const convertStringArrayIntoGrantHierarchy = (grantsStr) => {
	let result: any = {};

	grantsStr.forEach((grant) => {
		const nodes = grant.split('.');
		result = createGrantHierarchy(result, nodes);
	});

	return result;
};
