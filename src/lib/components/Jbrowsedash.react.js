import React, {Component} from 'react';
import PropTypes from 'prop-types';
const APOLLO_SERVER_PREFIX = 'https://stage.alliancegenome.org/apollo/';
// import GenomeFeatureViewer from 'genomefeaturecomponent';

/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */
export default class Jbrowsedash extends Component {

  constructor(props) {
    super(props);
    this.trackDataUrl = APOLLO_SERVER_PREFIX + 'track/';
    this.variantDataUrl = APOLLO_SERVER_PREFIX + 'vcf/';
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      // this.loadGenomeFeature();
    }
  }

    render() {
        const {id, label, setProps, value} = this.props;

        return (
            <div id={id}>
                11ExampleComponent: {label}&nbsp;
                <input
                    value={value}
                    onChange={
                        /*
                         * Send the new value to the parent component.
                         * setProps is a prop that is automatically supplied
                         * by dash's front-end ("dash-renderer").
                         * In a Dash app, this will update the component's
                         * props and send the data back to the Python Dash
                         * app server if a callback uses the modified prop as
                         * Input or State.
                         */
                        e => setProps({ value: e.target.value })
                    }
                />
            </div>
        );
    }

  // generateTrackConfig(fmin, fmax, chromosome, species, nameSuffixString) {
  //     return {
  //       'locale': 'global',
  //       'chromosome': chromosome,
  //       'start': fmin,
  //       'end': fmax,
  //       'showVariantLabel': false,
  //       'variantFilter':  [],
  //       'binRatio':0.01,
  //       'tracks': [
  //         {
  //           'id': 1,
  //           'genome':species,
  //           'type': 'ISOFORM_AND_VARIANT',
  //           'isoform_url': [
  //             this.trackDataUrl,
  //             '/All%20Genes/',
  //             `.json${nameSuffixString}`
  //           ],
  //           'variant_url': [
  //             this.variantDataUrl,
  //             '/Variants/',
  //             '.json'
  //           ],
  //
  //         },
  //       ]
  //   }

  // loadGenomeFeature() {
  //   // const {chromosome, fmin, fmax, species,id,primaryId,geneSymbol, displayType,synonyms = [],variant} = this.props;
  //   // createExample("11:69550420..69563869","mouse","viewerMouseExample3",TRACK_TYPE.ISOFORM_AND_VARIANT,false);
  //
  //   const chromosome = '11';
  //   const fmin = 69550420;
  //   const fmax = 69563869;
  //   const species = 'mouse';
  //   const width = 900;
  //   // provide unique names
  //   // const nameSuffix = [geneSymbol, ...synonyms,primaryId].filter((x, i, a) => a.indexOf(x) === i).map( x => encodeURI(x));
  //   // let nameSuffixString = nameSuffix.length ===0 ? '': nameSuffix.join('&name=');
  //   // if (nameSuffixString.length > 0) {
  //   //   nameSuffixString = `?name=${nameSuffixString}`;
  //   // }
  //
  //   // resolved in GenomeFeaturesViewer widget as:
  //   // var dataUrl = track["url"][0] + encodeURI(track["genome"]) + track["url"][1] + encodeURI(externalLocationString) + track["url"][2];
  //   // https://agr-apollo.berkeleybop.io/apollo/track/Mus%20musculus/All%20Genes/2:105668900..105697364.json?name=MGI:97490&name=Pax6
  //   // [0] should be apollo_url: https://agr-apollo.berkeleybop.io/apollo/track
  //   // [1] should be track name : ALL_Genes
  //   // [2] should be track name : name suffix string
  //   const trackConfig = this.generateTrackConfig(fmin,fmax,chromosome,species,'');
  //   // eslint-disable-next-line no-unused-vars
  //   const gfc = new GenomeFeatureViewer(trackConfig, `#${this.props.id}`, width);
  // }

}

Jbrowsedash.defaultProps = {};

Jbrowsedash.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * A label that will be printed when this component is rendered.
     */
    label: PropTypes.string.isRequired,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
